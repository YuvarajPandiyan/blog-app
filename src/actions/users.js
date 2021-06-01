import { users, user } from "../services/user.js";
import { users as userType } from "../actionTypes/users.js";
export const getUsers = () => {
  return async (dispatch) => {
    const result = await users()
      .then((result) => {
        dispatch({
          type: userType.GET_USERS,
          data: result.data,
        });
        return result;
      })
      .catch((err) => {
        return err;
      });
    console.log(result);
    return result;
  };
};

export const getUser = (id) => {
  return async (dispatch) => {
    const result = await user(id)
      .then((result) => {
        dispatch({
          type: userType.GET_USER,
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
