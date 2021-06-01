import axios from "axios";

export const getAllToDos = () => {
  return axios.get(`${process.env.REACT_APP_BASE_URL}/todos`);
};

export const getToDo = (id) => {
  return axios.get(`${process.env.REACT_APP_BASE_URL}/users/${id}/todos`);
};
