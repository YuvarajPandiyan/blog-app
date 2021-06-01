import { createPost as create } from "../services/createPost.js";
import { createPost as createPostTypes } from "../actionTypes/createPost.js";

export const createPost = (data) => {
  return (dispatch) => {
    const modData = {
      title: "",
      body: "",
      userId: 1,
    };
    data.blocks.map((item) => {
      if (item.type === "header") {
        modData.title = item.data?.text;
      }
      if (item.type === "paragraph") {
        modData.body = item.data?.text;
      }
      return null;
    });
    console.log(modData);
    const result = create(modData)
      .then((result) => {
        console.log(
          "🚀 ~ file: createPost.js ~ line 23 ~ .then ~ result",
          result
        );
        if (result.status === 201) {
          dispatch({ type: createPostTypes.CREATE_POST, data: result.data });
        }
      })
      .catch((err) => err);

    return result;
  };
};
