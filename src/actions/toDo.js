import { getAllToDos, getToDo } from "../services/toDo.js";
import { toDoTypes } from "../actionTypes/toDo.js";

export const getAllToDo = () => {
  return async (dispatch) => {
    const result = await getAllToDos()
      .then((result) => {
        dispatch({ type: toDoTypes.GET_ALL_TODO, data: result.data });
        return result;
      })
      .catch((err) => {
        return err;
      });
    return result;
  };
};

export const getToDos = (id) => {
  return async (dispatch) => {
    const result = await getToDo(id)
      .then((result) => {
        dispatch({
          type: toDoTypes.GET_TODO,
          data: result.data,
        });
        return result;
      })
      .then((err) => {
        return err;
      });
    return result;
  };
};
