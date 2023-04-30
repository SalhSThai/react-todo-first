import React, { useState } from "react";
import TodoHeader from "./elements/TodoHeader";
import TodoBody from "./elements/TodoBody";

function TodoList() {
  const [todoArray, setTodoArray] = useState([]);

  return (
    <div className="w-2/3 h-full min-h-full flex flex-col justify-start items-center ">
      <TodoHeader setTodoArray={setTodoArray} />
      <TodoBody todoArray={todoArray} />
    </div>
  );
}

export default TodoList;
