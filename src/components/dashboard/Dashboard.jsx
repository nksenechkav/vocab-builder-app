// src/components/dashboard/Dashboard.jsx

import css from './Dashboard.module.scss';
import SearchBox from '../searchBox/SearchBox.jsx';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div className={css["main-container"]}>
      <SearchBox />
      <div className={css["container"]}>
      <div className={css["statistics"]}>
        <p className={css["statistics-text"]}>To study:</p>
        <p className={css["statistics-amount"]}>20</p>
      </div>
      <div className={css["word-modal"]}>
        <p className={css["add-text"]}>Add word</p>
        <svg className={css.icon}>
              <use xlinkHref="/icons.svg#icon-plus"></use>
        </svg>
      </div>
      <div className={css["training-link"]}>
      <p className={css["text-link"]}>Train oneself</p>
        <Link to="/training">
        <svg className={css.icon}>
              <use xlinkHref="/icons.svg#icon-arrow"></use>
        </svg>
        </Link>    
    </div>
      </div>
    </div>
  );
};
