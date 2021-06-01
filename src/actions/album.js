import { album } from "../actionTypes/album.js";
import { getAllAlbums, getOneAlbumPhoto } from "../services/album.js";

export const getAllAlbum = () => {
  return async (dispatch) => {
    const result = await getAllAlbums()
      .then((result) => {
        dispatch({
          type: album.GET_ALL_ALBUMS,
          data: result.data,
        });
        return result;
      })
      .catch((err) => {
        return err;
      });
    return result;
  };
};

export const getOneAlbumPhotos = (id) => {
  return async (dispatch) => {
    const result = await getOneAlbumPhoto(id)
      .then((result) => {
        dispatch({
          type: album.GET_ONE_ALBUM_PHOTOS,
          data: result.data,
        });
      })
      .catch((err) => err);
    return result;
  };
};
