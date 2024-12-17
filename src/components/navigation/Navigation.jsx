import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.scss';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.navigation}>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Dictionary
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Recommend
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Training
        </NavLink>
      )}
    </nav>
  );
};
