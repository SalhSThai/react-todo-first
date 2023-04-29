import React from "react";
import TodoCard from "./TodoCard";

export default function TodoContent() {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
    </div>
  );
}
