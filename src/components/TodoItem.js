import React, { useState } from "react";
import {
  Button,
  CheckBox,
  TextBox,
  TodoItemBox,
} from "../styled/todoItem-styled";
import { useDispatch } from "react-redux";
import { remove, toggle, update } from "../features/todo/todoSlice";
import { FaRegSquare, FaRegCheckSquare } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import { BiPencil } from "react-icons/bi";

const TodoItem = ({ todo }) => {
  const { id, text, isCompleted } = todo;

  const [readOnly, setReadOnly] = useState(true);
  const [updateText, setUpdateText] = useState(text);

  const dispatch = useDispatch();

  const onChangeText = (e) => {
    const { value } = e.target;
    setUpdateText(value);
  };

  const updateTodo = () => {
    if (!isCompleted) {
      setReadOnly(false);
    }
  };

  return (
    <TodoItemBox>
      {/* 체크박스 */}
      <CheckBox onClick={() => dispatch(toggle(id))}>
        {isCompleted ? (
          <FaRegCheckSquare size="25px" color="#84a98c" />
        ) : (
          <FaRegSquare size="25px" />
        )}
      </CheckBox>

      {/* 인풋 */}
      <TextBox
        id="text"
        readOnly={readOnly}
        defaultValue={text}
        checked={isCompleted}
        onChange={onChangeText}
        onBlur={() => dispatch(update({ id, text: updateText }))}
      />

      {/* 수정버튼 */}
      {!isCompleted && (
        <Button onClick={updateTodo}>
          <BiPencil size="25px" color="#a5a58d" />
        </Button>
      )}

      {/* 삭제버튼 */}
      <Button onClick={() => dispatch(remove(id))}>
        <TiDeleteOutline size="30px" color="#e56b6f" />
      </Button>
    </TodoItemBox>
  );
};

export default TodoItem;
