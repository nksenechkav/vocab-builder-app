// src/components/userMenu/UserMenu.jsx

import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import css from './UserMenu.module.scss';
import { FaUser } from 'react-icons/fa';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <div className={css['wrapper-user']}>
      <p className={css.username}>{user.name}</p>
      <div className={css.userIcon}>
          <FaUser className={css.icon} />
      </div>
      </div>  
      <button className={css.btn} type="button" onClick={() => dispatch(logOut())}>
        Logout
        <svg className={css['icon-unique']} >
         <use xlinkHref="/icons.svg#icon-arrow" />
        </svg>
      </button>
    </div>
  );
};

