// src/components/app/App.jsx

import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../layout/Layout';
import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute';
import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import css from './App.module.scss';

const RegistrationPage = lazy(() => import('../../pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const DictionaryPage = lazy(() => import('../../pages/DictionaryPage/DictionaryPage'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p className={css.starting}>Refreshing user...</p>
  ) : (
    <Layout>
      <Routes>
          <Route
            path="/"
            element={
              <RestrictedRoute redirectTo="/dictionary" component={<RegistrationPage />} />
            }
          />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/dictionary" component={<RegistrationPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/dictionary" component={<LoginPage />} />
          }
        />
        <Route
          path="/dictionary"
          element={
            <PrivateRoute redirectTo="/login" component={<DictionaryPage />} />
          }
        />
        {/* <Route
          path="/recommend"
          element={<PrivateRoute redirectTo="/login" component={<RecommendPage />} />
          }
        />
        <Route
          path="/training"
          element={<PrivateRoute redirectTo="/login" component={<TrainingPage />} />
          }
        /> */}
      </Routes>
    </Layout>
);
};

export default App