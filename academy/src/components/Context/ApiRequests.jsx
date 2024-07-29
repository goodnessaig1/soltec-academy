import { apiRequest } from '../../Utils/ApiRequest';

export const getCourses = async (
  setCourseLoading,
  setCourses,
  setCourseError,
) => {
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

export const getBlogs = async (setBlogs, setBlogsLoading, setBlogsError) => {
  try {
    const response = await apiRequest('GET', `/blogs/`);
    setBlogs(response?.results);
    setBlogsLoading(false);
  } catch (error) {
    setBlogsError(true);
    setBlogsLoading(false);
  }
};

export const getCurrentCohort = async setCurrentCohort => {
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

export const getTestimonials = async setTestimonial => {
  try {
    const response = await apiRequest('GET', `/testimonials/?tag=ACADEMY`);
    setTestimonial(response?.results);
  } catch (error) {
    console.log('error', error);
  }
};

export const getSponsors = async (setSponsorsLoading, setSponsors) => {
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

export const getPlans = async setPlans => {
  try {
    const response = await apiRequest('GET', `/workspaces/fetch_plans/`);
    setPlans(response);
  } catch (error) {
    console.log(error);
  }
};

export const getAvailableSeats = async (
  id,
  setAvailableSeats,
  setSlotsLoading,
) => {
  let date = new Date().toISOString().slice(0, 10);
  setSlotsLoading(true);
  const data = {
    date: date,
  };
  try {
    const response = await apiRequest(
      'POST',
      `/workspaces/${id}/get_available_seats_per_date/`,
      data,
    );
    setAvailableSeats(response);
    setSlotsLoading(false);
  } catch (error) {
    setSlotsLoading(false);
    console.log(error);
  }
};

export const getAvailableSlots = async (setAvailableSlots, setLoadSlots) => {
  setLoadSlots(true);
  try {
    const response = await apiRequest(
      'POST',
      `/workspaces/get_slots_available/`,
    );
    setLoadSlots(false);
    setAvailableSlots(response);
  } catch (error) {
    setLoadSlots(false);
    console.log(error);
  }
};
