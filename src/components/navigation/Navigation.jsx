import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.scss';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.navigation}>
      {isLoggedIn && (
        <NavLink  className={({ isActive }) => (isActive ? `${css.link} ${css.active}` : css.link)} to="/words">
          Dictionary
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink  className={({ isActive }) => (isActive ? `${css.link} ${css.active}` : css.link)} to="/words">
          Recommend
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink  className={({ isActive }) => (isActive ? `${css.link} ${css.active}` : css.link)} to="/words">
          Training
        </NavLink>
      )}
    </nav>
  );
};
