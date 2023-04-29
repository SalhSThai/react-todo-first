import React from "react";

function Navbar() {
  return (
    <div className="w-full flex bg-[#006350]  rounded-b-3xl px-4 shadow-white shadow-md overflow-hidden justify-between">
      <logo className="w-[100px] h-[100px] bg-cover bg-[url('https://upload.wikimedia.org/wikipedia/commons/b/b4/Logo_Mint.png')]"></logo>

      <div className="gap-10 flex justify-evenly items-center text-white">
        <div role="button" className="  hover:text-slate-300 drop-shadow-white  cursor-pointer ">
          HOME
        </div>
        <div role="button" className=" hover:text-slate-300 drop-shadow-white cursor-pointer">
          MARKET
        </div>
        <div role="button" className="  hover:text-slate-300 drop-shadow-white cursor-pointer">
          EXPLORER
        </div>
        <div role="button" className=" hover:text-slate-300 drop-shadow-white cursor-pointer">
          CONTACT
        </div>
      </div>
    </div>
  );
}

export default Navbar;
