import { posts as postTypes } from "../actionTypes/posts.js";
import { GetPost, GetPosts, GetSingleUserPosts } from "../services/posts.js";

export const getPosts = () => {
  return async (dispatch) => {
    const result = await GetPosts()
      .then((done) => {
        dispatch({
          type: postTypes.GET_POSTS,
          data: done.data,
        });
        return done;
      })
      .catch((err) => {
        return err;
      });
    return result;
  };
};

export const getPost = (id) => {
  return async (dispatch) => {
    const result = await GetPost(id)
      .then((result) => {
        dispatch({
          type: postTypes.GET_POST,
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

export const getSingleUserPosts = (id) => {
  return async (dispatch) => {
    const result = await GetSingleUserPosts(id)
      .then((result) => {
        dispatch({
          type: postTypes.GET_SINGLE_USER_POSTS,
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
