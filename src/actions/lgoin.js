import { loginTypes } from "../actionTypes/login.js";
import { logIn, logOut } from "../services/login.js";
export const login = (username, password) => {
  return async (dispatch) => {
    const result = await logIn(username, password)
      .then((result) => {
        dispatch({
          type: loginTypes.LOGIN,
          data: result,
        });
        return result;
      })
      .catch((err) => {
        dispatch({
          type: loginTypes.LOGIN,
          data: err,
        });
        return err;
      });
    return result;
  };
};

export const logout = () => {
  return async (dispatch) => {
    const result = await logOut()
      .then((result) => {
        dispatch({
          type: loginTypes.LOGIN,
          data: result,
        });
        return result;
      })
      .catch((err) => {
        dispatch({
          type: loginTypes.LOGOUT,
          data: err,
        });
        return err;
      });
    return result;
  };
};
