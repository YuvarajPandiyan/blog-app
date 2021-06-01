import { comments as commentsTypes } from "../actionTypes/comments.js";
import { GetComments } from "../services/posts.js";
export const getComments = (id) => {
  return async (dispatch) => {
    const result = await GetComments(id)
      .then((result) => {
        dispatch({
          type: commentsTypes.GET_COMMENTS,
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
