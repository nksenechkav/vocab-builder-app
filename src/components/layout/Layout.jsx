import css from './Layout.module.scss';
import { Suspense } from 'react';
import { AppBar } from '../appBar/AppBar';
import LoaderComponent from '../loader/Loader.jsx';


export const Layout = ({children}) => {
  return (
    <div className={css["container"]}>
      <AppBar />
      <Suspense fallback={<LoaderComponent />}> 
      {children}
      </Suspense>
    </div>
  );
};
