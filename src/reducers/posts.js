import { posts as postsTypes } from "../actionTypes/posts.js";

const init = [
  {
    userId: null,
    id: null,
    title: "",
    body: "",
  },
];

export const posts = (state = init, action) => {
  switch (action.type) {
    case postsTypes.GET_POSTS:
      return action.data;
    default:
      return state;
  }
};

const init1 = {
  userId: null,
  id: null,
  title: "",
  body: "",
};

export const post = (state = init1, action) => {
  switch (action.type) {
    case postsTypes.GET_POST:
      return action.data;
    default:
      return state;
  }
};

export const singleUserPosts = (state = init, action) => {
  switch (action.type) {
    case postsTypes.GET_SINGLE_USER_POSTS:
      return action.data;
    default:
      return state;
  }
};
