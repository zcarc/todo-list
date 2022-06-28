import React from "react";
import { Template, Title } from "../styled/common-styled";

function TodoTemplate({ children }) {
  return (
    <Template>
      <Title>할 일</Title>
      {children}
    </Template>
  );
}

export default TodoTemplate;
