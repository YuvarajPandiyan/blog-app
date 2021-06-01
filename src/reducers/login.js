import { loginTypes } from "../actionTypes/login.js";

const init = {
  authenticated: (() => {
    return localStorage.getItem("authenticated") === "true" ? true : false;
  })(),
};

export const authenticated = (state = init, action) => {
  switch (action.type) {
    case loginTypes.LOGIN:
      return action.data;
    case loginTypes.LOGOUT:
      return action.data;
    default:
      return state;
  }
};
