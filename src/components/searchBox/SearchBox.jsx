import { changeFilter } from '../../redux/filters/slice';
import css from './SearchBox.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors';
import { selectCategories } from '../../redux/contacts/selectors';

const SearchBox = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectNameFilter);
  const categories = useSelector(selectCategories);
 
  const handleChange = (e) => {
    const newValue = e.target.value;
    dispatch(changeFilter(newValue));
  };

  const handleCategoryChange = (e) => {
    const newValue = e.target.value;
    dispatch(changeFilter({ type: 'category', value: newValue }));
  };
  
  return (
    <div className={css.searchBox}>
      <input className={css.searchField}
        type="text"
        placeholder='Find the word'
        value={filter}
        onChange={handleChange}
      />
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
    </div>
  );
}
export default SearchBox; 