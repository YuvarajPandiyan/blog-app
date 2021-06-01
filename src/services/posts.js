import axios from "axios";

export const GetPosts = () => {
  return axios.get(`${process.env.REACT_APP_BASE_URL}/posts`);
};

export const GetPost = (id) => {
  return axios.get(`${process.env.REACT_APP_BASE_URL}/posts/${id}`);
};

export const GetSingleUserPosts = (id) => {
  return  axios.get(`${process.env.REACT_APP_BASE_URL}/users/${id}/posts`)
}

export const GetComments = (id) => {
  return axios.get(`${process.env.REACT_APP_BASE_URL}/posts/${id}/comments`);
};
