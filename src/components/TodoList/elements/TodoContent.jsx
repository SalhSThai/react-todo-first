import React from "react";
import TodoCard from "./TodoCard";

export default function TodoContent({ todoArray }) {
  return (
    <div className="w-full h-full  flex flex-col justify-start items-center">
      {todoArray.map((item, index) => (
        <TodoCard key={index} item={item} />
      ))}
    </div>
  );
}
