/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import { adminApiRequest, apiRequest } from '../../Utils/ApiRequest';
import {
  getAvailableSeats,
  getBlogs,
  getCourses,
  getCurrentCohort,
  getPlans,
  getSponsors,
  getTestimonials,
} from './ApiRequests';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState(null);
  const [sponsors, setSponsors] = useState(null);
  const [courseLoading, setCourseLoading] = useState(true);
  const [courseError, setCourseError] = useState(false);
  const [blogs, setBlogs] = useState(null);
  const [blogsLoading, setBlogsLoading] = useState(true);
  const [blogsError, setBlogsError] = useState(false);
  const [currentCohort, setCurrentCohort] = useState('');
  const [testimonial, setTestimonial] = useState(null);
  const [sponsorsLoading, setSponsorsLoading] = useState(true);
  const [availableSeats, setAvailableSeats] = useState(null);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [plans, setPlans] = useState(null);

  useEffect(() => {
    getCourses(setCourseLoading, setCourses, setCourseError);
    getBlogs(setBlogs, setBlogsLoading, setBlogsError);
    getCurrentCohort(setCurrentCohort);
    getTestimonials(setTestimonial);
    getSponsors(setSponsorsLoading, setSponsors);
    getAdminDetail();
    getPlans(setPlans);
  }, []);

  useEffect(() => {
    if (plans && plans != null) {
      let i = plans.length - 1;
      let id = plans[i].id;
      getAvailableSeats(id, setAvailableSeats, setSlotsLoading);
    }
  }, [plans]);

  const token = Cookies.get('access_token');
  useEffect(() => {
    if (token) {
      const tokenData = JSON.parse(atob(token.split('.')[1]));
      const tokenExpiration = new Date(tokenData.exp * 1000);
      if (tokenExpiration < new Date()) {
        Cookies.remove('access_token');
        Cookies.remove('refresh_token');
      }
    }
  }, [token]);

  const getAdminDetail = async () => {
    try {
      const response = await adminApiRequest('GET', '/users/me/');
      setUser(response);
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
    courses,
    courseLoading,
    blogs,
    blogsLoading,
    currentCohort,
    testimonial,
    sponsors,
    sponsorsLoading,
    courseError,
    blogsError,
    availableSeats,
    setAvailableSeats,
    slotsLoading,
    setSlotsLoading,
  };
  return (
    <AuthContext.Provider value={value}>{props?.children}</AuthContext.Provider>
  );
}
