import { album as albumType } from "../actionTypes/album.js";
const init = [
  {
    userId: null,
    id: null,
    title: "",
  },
];

export const album = (state = init, action) => {
  switch (action.type) {
    case albumType.GET_ALL_ALBUMS:
      return action.data;

    default:
      return state;
  }
};

const init1 = [
  {
    albumId: null,
    id: null,
    title: "",
    url: "",
    thumbnailUrl: "",
  },
];

export const albumPhotos = (state = init1, action) => {
  switch (action.type) {
    case albumType.GET_ONE_ALBUM_PHOTOS:
      return action.data;

    default:
      return state;
  }
};
