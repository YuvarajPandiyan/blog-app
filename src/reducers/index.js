import { combineReducers } from "redux";
import { posts, post, singleUserPosts } from "./posts.js";
import { users, user } from "./user.js";
import { comments } from "./comments.js";
import { singleUserToDos, toDos } from "./toDos.js";
import { album, albumPhotos } from "./album.js";
import { authenticated } from "./login.js";
import { createPost } from "./createPosts.js";

export default combineReducers({
  authenticated,
  posts,
  post,
  singleUserPosts,
  users,
  user,
  comments,
  toDos,
  singleUserToDos,
  album,
  albumPhotos,
  createPost,
});
