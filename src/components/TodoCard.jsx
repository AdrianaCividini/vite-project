import React from "react";
import TodoList from "./TodoList";

export default function TodoCard(props) {
  const { children } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <i class="fa-regular fa-trash-can"></i>
        <i class="fa-regular fa-pen-to-square"></i>
      </div>
    </li>
  );
}
