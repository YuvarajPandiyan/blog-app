import axios from "axios";

export const getAllAlbums = () => {
  return axios.get(`${process.env.REACT_APP_BASE_URL}/albums`);
};

export const getOneAlbumPhoto = (id) =>
  axios.get(`${process.env.REACT_APP_BASE_URL}/albums/${id}/photos`);
