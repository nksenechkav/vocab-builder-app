import { changeFilter } from '../../redux/filters/slice';
import css from './SearchBox.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/filters/selectors';
import { selectCategories } from '../../redux/words/selectors';
import { fetchCategories } from '../../redux/words/operations';
import { useEffect } from 'react';

const SearchBox = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);
  const categories = useSelector(selectCategories);
 
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // Обробник зміни текстового поля
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    dispatch(changeFilter({ type: 'word', value: newValue }));
  };

  // Обробник зміни категорії
  const handleCategoryChange = (e) => {
    const newValue = e.target.value;
    dispatch(changeFilter({ type: 'category', value: newValue }));
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
      <select
        className={css.categorySelect}
        onChange={handleCategoryChange}
        value={filter.category || ''}
      >
        <option value="">All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* Рендеринг радіо-кнопок для "verb" */}
      {filter.category === 'verb' && (
        <div className={css.radioGroup}>
          <label>
            <input
              type="radio"
              name="verbType"
              value="regular"
              onChange={() => dispatch(changeFilter({ type: 'verbType', value: 'regular' }))}
              checked={filter.verbType === 'regular'}
            />
            Regular
          </label>
          <label>
            <input
              type="radio"
              name="verbType"
              value="irregular"
              onChange={() => dispatch(changeFilter({ type: 'verbType', value: 'irregular' }))}
              checked={filter.verbType === 'irregular'}
            />
            Irregular
          </label>
        </div>
      )}
    </div>
  );
};
export default SearchBox; 