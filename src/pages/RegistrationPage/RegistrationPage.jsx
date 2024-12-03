import DocumentTitle from '../../components/DocumentTitle';
import { RegistrationForm } from '../../components/registrationForm/RegistrationForm';
import css from './RegistrationPage.module.scss';

export default function RegistrationPage() {
  return (
    <>
      <DocumentTitle>Registration</DocumentTitle>
      <div className={css["container"]}>
      <RegistrationForm />
      <div className={css["image-container"]}>
          <img src="../../../illustration.png" alt="home" className={css.image} />
      </div>
      </div>
    </>
  );
}
