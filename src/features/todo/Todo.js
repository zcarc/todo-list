import React from "react";
import TodoInput from "../../components/TodoInput";
import TodoList from "../../components/TodoList";
import TodoTemplate from "../../components/TodoTemplate";

function Todo() {
  return (
    <TodoTemplate>
      <TodoInput />
      <TodoList />
    </TodoTemplate>
  );
}

export default Todo;
