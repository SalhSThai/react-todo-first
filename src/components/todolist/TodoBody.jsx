import React, { useState } from "react";
import TodoCards from "./TodoCards";

function TodoBody(props) {
  const { todoArray } = props;
  return (
    <div className="w-full grow flex flex-col justify-start items-center gap-4 ">
      {todoArray.map((item, index) => (
        <TodoCards key={index} todoItem={item} />
      ))}
    </div>
  );
}

export default TodoBody;
