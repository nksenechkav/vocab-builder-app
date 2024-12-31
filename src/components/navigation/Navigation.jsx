// src/components/navigation/Navigation.jsx

import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.scss';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.navigation}>
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) => (isActive ? `${css.link} ${css.active}` : css.link)}
          to="/dictionary"
        >
          Dictionary
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) => (isActive ? `${css.link} ${css.active}` : css.link)}
          to="/recommend"
        >
          Recommend
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) => (isActive ? `${css.link} ${css.active}` : css.link)}
          to="/training"
        >
          Training
        </NavLink>
      )}
    </nav>
  );
};
