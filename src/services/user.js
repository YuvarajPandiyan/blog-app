import axios from "axios";

export const users = () => {
  return axios.get(`${process.env.REACT_APP_BASE_URL}/users`);
};

export const user = (id) => {
  return axios.get(`${process.env.REACT_APP_BASE_URL}/users/${id}`);
};
