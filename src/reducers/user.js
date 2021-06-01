import { users as usersType } from "../actionTypes/users.js";

const init = [
  {
    id: null,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
      phone: "",
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: "",
      },
    },
  },
];

export const users = (state = init, action) => {
  switch (action.type) {
    case usersType.GET_USERS:
      console.log("action", action);
      return action.data;
    default:
      return state;
  }
};

const init1 = {
  id: null,
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: "",
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  },
};

export const user = (state = init1, action) => {
  switch (action.type) {
    case usersType.GET_USER:
      console.log("action", action);
      return action.data;
    default:
      return state;
  }
};
