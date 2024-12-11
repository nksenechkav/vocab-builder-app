// src/pages/LoginPage/LoginPage.jsx

import DocumentTitle from '../../components/DocumentTitle';
import { LoginForm } from '../../components/loginForm/LoginForm';
import css from './LoginPage.module.scss';

export default function LoginPage() {
  return (
    <>
      <DocumentTitle>Login</DocumentTitle>
      <div className={css.container}>
            <LoginForm />
            <div className={css["image-container"]}>
            <img src="../../../illustration.png" alt="home" className={css.image} />
            <p className={css.text}> Word <span>·</span> Translation <span>·</span> Grammar <span>·</span> Progress</p>
          </div>
        </div>
    </>
  );
}
