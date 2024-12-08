/* eslint-disable no-unused-vars */
import { BaseURL } from "./BaseUrl";
import Cookies from "js-cookie";

const defaultHeaders = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${Cookies.get("access_token")}`,
};

export async function apiRequest(method, path, data, headers = defaultHeaders) {
  try {
    let url = `${BaseURL}${path}`;
    const config = {
      method: method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, config);
    if (response.ok) {
      const responseData = await response.json();

      return responseData;
    }
  } catch (error) {
    throw new Error(error);
  }
}

export async function adminApiRequest(
  method,
  path,
  data,
  headers = defaultHeaders
) {
  try {
    let url = `${BaseURL}${path}`;
    const config = {
      method: method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("access_token")}`,
      },
    };
    const response = await fetch(url, config);
    // const responseData = await response.json();
    // return responseData;
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const responseData = await response.json();
      return responseData;
    } else {
      const text = await response;
      return text;
    }
  } catch (error) {
    throw new Error(error);
  }
}

export const uploadFile = async (formData, setLoading) => {
  const url = `${BaseURL}/courses/upload_file/`;
  setLoading(true);
  const config = {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${Cookies.get("access_token")}`,
    },
  };
  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const responseData = await response.json();
    setLoading(false);
    return responseData;
  } catch (error) {
    console.error("Error:", error);
    setLoading(false);
    throw error;
  }
};

export const getAdminDetail = async (setUser) => {
  try {
    const response = await adminApiRequest("GET", `/users/me/`);
    setUser(response);
  } catch (error) {
    console.log(error);
  }
};
