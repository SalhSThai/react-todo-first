import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
function TodoCards(props) {
  function handleEdit(event) {}
  function handleDelete(event) {}
  return (
    <div className="w-full h-[80px] flex justify-between items-center shadow-lg rounded-xl gap-4 px-8">
      <div className="grow text-[24px] px-4">{props.todoItem}</div>
      <FaEdit role="button" className="cursor-pointer hover:shadow-md" onClick={handleEdit} />
      <FaTrashAlt role="button" className="cursor-pointer hover:shadow-md" onClick={handleDelete} />
    </div>
  );
}

export default TodoCards;
