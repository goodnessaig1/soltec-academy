/* eslint-disable react/prop-types */
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

const AuthRoutes = () => {
  const token = Cookies.get('access_token');

  return token ? <Outlet /> : <Navigate to='/admin/sign-in' />;
};

export default AuthRoutes;
