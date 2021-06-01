import { comments as commentTypes } from "../actionTypes/comments.js";
const init = [
  {
    postId: null,
    id: null,
    name: "",
    email: "",
    body: "",
  },
];

export const comments = (state = init, action) => {
  switch (action.type) {
    case commentTypes.GET_COMMENTS:
      return action.data;

    default:
      return state;
  }
};
