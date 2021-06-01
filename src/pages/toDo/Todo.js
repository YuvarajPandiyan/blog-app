import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAllToDo } from "../../actions/toDo.js";
import ToDos from "../../components/toDo/ToDo.js";

const Todo = (props) => {
  const [toDoLoading, setToDoLoading] = useState(true);

  const { getAllToDo, toDos } = props;

  useEffect(() => {
    getAllToDo().then((result) => {
      setToDoLoading(false);
    });
  }, [getAllToDo]);

  return <> {!toDoLoading ? <ToDos toDos={toDos} /> : "...Loading"}</>;
};

const mapStateToProps = (state) => {
  return { toDos: state.toDos };
};

export default connect(mapStateToProps, { getAllToDo })(Todo);
