import React from "react";
import TodoContent from "./TodoContent";

function TodoBody() {
  return (
    <div className="w-full grow p-4 flex justify-between items-center  rounded-2xl shadow-md focus:shadow-[#222] gap-4">
      <TodoContent />
    </div>
  );
}

export default TodoBody;
