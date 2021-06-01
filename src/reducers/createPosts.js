import { createPost as createPostTypes } from "../actionTypes/createPost.js";

const init = {
  id: null,
  title: "",
  body: "",
  userId: null,
};

export const createPost = (state = init, action) => {
  switch (action.type) {
    case createPostTypes.CREATE_POST:
      return action.data;

    default:
      return state;
  }
};
