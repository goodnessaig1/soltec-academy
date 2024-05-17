/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from 'react';
import { apiRequest } from '../../Utils/ApiRequest';
import Cookies from 'js-cookie';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const token = Cookies.get('access_token');
  // console.log(token);
  useEffect(() => {
    if (token) {
      const tokenData = JSON.parse(atob(token.split('.')[1]));
      const tokenExpiration = new Date(tokenData.exp * 1000);
      if (tokenExpiration < new Date()) {
        console.log('removed');
        Cookies.remove('access_token');
        Cookies.remove('refresh_token');
      }
    }
  }, [token]);

  const getAdminDetail = async () => {
    try {
      const response = await apiRequest('GET', '/users/me/');
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      getAdminDetail();
    }
  }, [token]);

  const value = {
    user,
    setUser,
  };
  return (
    <AuthContext.Provider value={value}>{props?.children}</AuthContext.Provider>
  );
}
