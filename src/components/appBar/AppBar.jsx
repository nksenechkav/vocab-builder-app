// src/components/appBar/AppBar.jsx

import { Navigation } from '../navigation/Navigation';
import { UserMenu } from '../userMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './AppBar.module.scss';
import { Link } from 'react-router-dom';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
     <Link className={css["logo"]} to="/register">
     <div className={css['logo-container']}>
          <svg className={css.icon}>
            <use xlinkHref="/icons.svg#icon-logo-flower" />
          </svg>
          <span className={css['logo-text']}>VocabBuilder</span>
        </div>
      </Link>
      <Navigation className={css.navigation} />
      {isLoggedIn  && <UserMenu /> }
    </header>
  );
};
