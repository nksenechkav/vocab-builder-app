// src/components/authNav/AuthNav.jsx

import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.scss';

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={css["auth-link"]} to="/register">
        Register
      </NavLink>
      <NavLink className={css["auth-link"]} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
