// src/pages/HomePage/HomePage.jsx

import { Link } from 'react-router-dom';
import { MdOutlineArrowOutward } from "react-icons/md";
import DocumentTitle from '../../components/DocumentTitle.jsx';
import css from './HomePage.module.scss';

export default function HomePage() {
  return (
    <>
      <DocumentTitle>VocabBuilder</DocumentTitle>
      <div className={css.container}>
        <div className={css["title-container"]}>
          <h1 className={css.title}>
            Make Life Easier for the Family:
          </h1>
          <p className={css.subtitle}>
            Find Babysitters Online for All Occasions
          </p>
          <Link to="/catalog" className={css.btn}>
            <p className={css.text}>Get started</p>
            <MdOutlineArrowOutward className={css.icon} size={18} />
          </Link>
        </div>
        <div className={css["image-container"]}>
          <img src="../../../illustration.png" alt="home" className={css.image} />
        </div>
      </div>
    </>
  );
}
