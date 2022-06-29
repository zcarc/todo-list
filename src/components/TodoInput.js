import React, { useRef, useState } from "react";
import { AddButton, Input, TodoInputBox } from "../styled/todoInput-styled";
import { insert } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

function TodoInput() {
  const [todoInput, setTodoInput] = useState("");
  let nextId = useRef(2);

  const dispatch = useDispatch();

  const onChangeInput = (e) => {
    setTodoInput(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const addTodo = () => {
    if (todoInput.length === 0) {
      alert("내용을 입력해주세요!");
      return;
    }

    dispatch(insert({ id: nextId.current, text: todoInput }));
    nextId.current += 1;
    setTodoInput("");
  };

  return (
    <TodoInputBox>
      <Input
        onChange={onChangeInput}
        onKeyPress={onKeyPress}
        value={todoInput}
        placeholder="할 일을 입력하세요!"
      />
      <AddButton onClick={addTodo}>추가</AddButton>
    </TodoInputBox>
  );
}

export default TodoInput;
