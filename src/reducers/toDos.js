import { toDoTypes } from "../actionTypes/toDo.js";

const init = [
  {
    userId: null,
    id: null,
    title: "",
    completed: null,
  },
];

export const toDos = (state = init, action) => {
  switch (action.type) {
    case toDoTypes.GET_ALL_TODO:
      return action.data;

    default:
      return state;
  }
};

export const singleUserToDos = (state = init, action) => {
  switch (action.type) {
    case toDoTypes.GET_TODO:
      return action.data;

    default:
      return state;
  }
};
