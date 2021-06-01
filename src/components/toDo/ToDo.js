import React from "react";
import "./toDo.css";
const ToDo = ({ toDos }) => {
  return (
    <div className="toDos">
      <h2 className="toDO__title">ToDo's</h2>
      <div className="toDo_scroll">
        <ol>
          {toDos.map((toDo) => {
            return (
              <li>
                <div
                  className={`toDo__title ${
                    toDo.completed ? "completed" : "not__completed"
                  }`}
                  key={toDo.id}
                >
                  {toDo.title}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default ToDo;
