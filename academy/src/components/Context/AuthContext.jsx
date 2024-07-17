/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import { adminApiRequest, apiRequest } from '../../Utils/ApiRequest';

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

  const getCourses = async () => {
    setCourseLoading(true);
    try {
      const response = await apiRequest('GET', `/courses/fetch_home_courses/`);
      setCourseLoading(false);
      setCourses(response);
    } catch (error) {
      setCourseLoading(false);
      setCourseError(true);
      console.log('error', error);
    }
  };

  const getBlogs = async () => {
    try {
      const response = await apiRequest('GET', `/blogs/`);
      setBlogs(response?.results);
      setBlogsLoading(false);
    } catch (error) {
      setBlogsError(true);
      setBlogsLoading(false);
    }
  };

  const getCurrentCohort = async () => {
    try {
      const response = await apiRequest(
        'GET',
        `/cohort/check_for_current_cohorts/`,
      );
      if (response && response?.start_date) {
        setCurrentCohort(response);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const getTestimonials = async () => {
    try {
      const response = await apiRequest('GET', `/testimonials/`);
      setTestimonial(response?.results);
    } catch (error) {
      console.log('error', error);
    }
  };

  const getSponsors = async () => {
    setSponsorsLoading(true);
    try {
      const response = await apiRequest('GET', `/sponsors/`);
      setSponsors(response.results);
      setSponsorsLoading(false);
    } catch (error) {
      setSponsorsLoading(false);
      console.log('error', error);
    }
  };

  useEffect(() => {
    getCourses();
    getBlogs();
    getCurrentCohort();
    getTestimonials();
    getSponsors();
  }, []);

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
  };
  return (
    <AuthContext.Provider value={value}>{props?.children}</AuthContext.Provider>
  );
}
