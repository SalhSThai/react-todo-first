import React from "react";
import TodoList from "../components/TodoList/TodoList";

function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center p-8">
      <TodoList />
    </div>
  );
}

export default Home;
