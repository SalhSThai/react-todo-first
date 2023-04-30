import React, { useState } from "react";

export default function TodoForm({ setTodoArray }) {
  const [todoText, setTodoText] = useState("");
  const handdleSubmitForm = (e) => {
    e.preventDefault();
    setTodoArray((p) => [...p, todoText]);
    setTodoText("");
  };
  return (
    <form className="w-full h-full flex justify-between items-center gap-4 " onSubmit={handdleSubmitForm}>
      <input
        type="text"
        className=" h-[42px] rounded-md grow border-none focus:outline-none px-4 shadow-lg focus:shadow-[#555]"
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
      />
      <button
        type="submit"
        className="h-10 w-10 rounded-md flex justify-center items-center shadow-lg bg-teal-300 px-8 hover:shadow-[#555] active:shadow-inner cursor-pointer select-none"
      >
        ADD
      </button>
    </form>
  );
}
