import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
export default function TodoCard() {
  return (
    <div className="w-full h-[100px] bg-teal-800 rounded-3xl flex justify-center items-center p-8 my-2">
      <div className="h-full grow"></div>
      <div className="flex justify-center items-center gap-4">
        <FaEdit className="cursor-pointer text-teal-300 hover:text-teal-600 " />
        <FaTrashAlt className="cursor-pointer text-teal-300 hover:text-teal-600 " />
      </div>
    </div>
  );
}
