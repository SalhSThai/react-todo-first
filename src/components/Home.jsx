import React, { useState } from "react";
import TodoInput from "./todolist/TodoInput";
import TodoBody from "./todolist/TodoBody";

function Home() {
  const [todoArray, setTodoArray] = useState([]);

  return (
    <div className="w-2/3 h-full flex flex-col justify-start items-center shadow-lg rounded-b-3xl p-4">
      <TodoInput setTodoArray={setTodoArray} />
      <TodoBody todoArray={todoArray} />
    </div>
  );
}

export default Home;
