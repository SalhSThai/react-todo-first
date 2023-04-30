import React from "react";
import TodoContent from "./TodoContent";

function TodoBody(props) {
  const { todoArray } = props;
  return (
    <div className="w-full  grow  p-4 flex justify-between items-center  rounded-2xl shadow-md focus:shadow-[#222] gap-4">
      <TodoContent todoArray={todoArray} />
    </div>
  );
}

export default TodoBody;
