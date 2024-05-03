/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from 'react';
import { apiRequest } from '../../Utils/ApiRequest';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getAdminDetail = async () => {
      try {
        const response = await apiRequest('GET', '/users/me/');
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAdminDetail();
  }, []);

  const value = {
    user,
    setUser,
  };
  return (
    <AuthContext.Provider value={value}>{props?.children}</AuthContext.Provider>
  );
}
