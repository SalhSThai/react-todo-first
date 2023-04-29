import React from "react";
import TodoForm from "./TodoForm";

function TodoHeader() {
  return (
    <div className="w-full h-[100px] p-4  rounded-2xl shadow-md ">
      <TodoForm />
    </div>
  );
}

export default TodoHeader;
