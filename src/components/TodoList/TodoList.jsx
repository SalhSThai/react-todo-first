import React from "react";
import TodoHeader from "./elements/TodoHeader";
import TodoBody from "./elements/TodoBody";

function TodoList() {
  return (
    <div className="w-2/3 h-full flex flex-col justify-start items-center ">
      <TodoHeader />
      <TodoBody />
    </div>
  );
}

export default TodoList;
