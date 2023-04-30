import React from "react";
import TodoForm from "./TodoForm";

function TodoHeader(props) {
  const { setTodoArray } = props;
  return (
    <div className="w-full h-[100px] p-4  rounded-2xl shadow-md ">
      <TodoForm setTodoArray={setTodoArray} />
    </div>
  );
}

export default TodoHeader;
