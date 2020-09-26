import axios, { Canceler } from "axios";
import BASE_URL from "../config";
import AuthStore from "./AuthStore";
import { createBrowserHistory } from 'history';
import { useHistory, Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

export const history = createBrowserHistory();

axios.interceptors.request.use(
  config => {
    const token = AuthStore.getToken();
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  error => {
    Promise.reject(error)
  }
);


const get = async (url, data) => {
  const response = await axios.get(BASE_URL + url, {
    params: data,
  });
  return response;
};

const post = async (url, data) => {
  const response = await axios.post(BASE_URL + url, data, {
    headers: {
      "Accept": "application/json",
      "Content-Type": 'application/json',
    },
  });
  return response;
};

const put = async (url, data) => {
  const response = await axios.put(BASE_URL + url, data, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
  });
  return response;
};

const remove = async (url, data, options) => {
  const response = await axios.delete(BASE_URL + url, {
    ...options,
    params: data,
  });
  return response;

};
export default { get, post, put, remove };