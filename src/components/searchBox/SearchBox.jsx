import { changeFilter } from '../../redux/filters/slice';
import css from './SearchBox.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/filters/selectors';
import { selectCategories } from '../../redux/words/selectors';
import { fetchCategories } from '../../redux/words/operations';
import { useEffect, useState } from 'react';

const SearchBox = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);
  const categories = useSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // Обработчик изменения текстового поля
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    dispatch(changeFilter({ type: 'word', value: newValue }));
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleSelect = (category) => {
    setSelectedOption(category);
    setIsDropdownOpen(false);
    dispatch(changeFilter({ type: 'category', value: category })); // Синхронизация с Redux
  };

  return (
    <div className={css.searchBox}>
      <div className={css.searchWrapper}>
      <input
        className={css.searchField}
        type="text"
        placeholder="Find the word"
        value={filter.name || ''}
        onChange={handleInputChange}
      />
      <svg className={css['icon-search']}>
      <use xlinkHref="/icons.svg#icon-search"></use>
      </svg>
    </div>
    <div className={css.customSelect}>
        <button onClick={toggleDropdown} className={css.selectedOption}>
          {selectedOption || 'All categories'}
        </button>
        {isDropdownOpen && (
          <ul className={css.dropdownMenu}>
            <li onClick={() => handleSelect('')} className={css.dropdownItem}>
              All categories
            </li>
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => handleSelect(category)}
                className={css.dropdownItem}
              >
                {category}
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* Рендеринг радіо-кнопок для "verb" */}
      {filter.category === 'verb' && (
  <div className={css.radioGroup}>
    <div
      className={`${css.radioWrapper} ${
        filter.verbType === 'regular' ? css.selected : ''
      }`}
      onClick={() =>
        dispatch(changeFilter({ type: 'verbType', value: 'regular' }))
      }
    >
      <svg className={css.radioIcon}>
        <use
          xlinkHref={
            filter.verbType === 'regular'
              ? '/icons.svg#icon-radio-btn-press' // Активная иконка
              : '/icons.svg#icon-btn' // Неактивная иконка
          }
        ></use>
      </svg>
      <span className={css.label}>Regular</span>
    </div>
    <div
      className={`${css.radioWrapper} ${
        filter.verbType === 'irregular' ? css.selected : ''
      }`}
      onClick={() =>
        dispatch(changeFilter({ type: 'verbType', value: 'irregular' }))
      }
    >
      <svg className={css.radioIcon}>
        <use
          xlinkHref={
            filter.verbType === 'irregular'
              ? '/icons.svg#icon-radio-btn-press' // Активная иконка
              : '/icons.svg#icon-btn' // Неактивная иконка
          }
        ></use>
      </svg>
      <span className={css.label}>Irregular</span>
    </div>
  </div>
)}
    </div>
  );
};
export default SearchBox; 