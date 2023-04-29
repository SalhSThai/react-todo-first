import React, { useState } from "react";

function TodoInput(props) {
  const { setTodoArray } = props;
  const [text, setText] = useState("");
  function handlerAddTodo(e) {
    setTodoArray((p) => [...p, text]);
  }
  return (
    <div className="w-full h-[100px] flex justify-evenly items-center px-8">
      <input
        type="text"
        className="grow h-[42px] px-4 focus:outline-none shadow-lg border border-slate-200 rounded-xl"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="button"
        className="h-10 rounded-md border shadow-lg border-slate-200 px-4 hover:bg-slate-200 hover:text-white active:shadow-inner "
        onClick={handlerAddTodo}
      >
        ADD
      </button>
    </div>
  );
}

export default TodoInput;
