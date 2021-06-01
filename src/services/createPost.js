import axios from "axios";

export const createPost = (data) => {
  return axios.post(`${process.env.REACT_APP_BASE_URL}/posts`, data);
};
