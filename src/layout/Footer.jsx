import React, { useState } from "react";

function Footer() {
  const [mouseHover, setMouseHover] = useState(false);
  return (
    <div className="w-full h-[100px]" onMouseEnter={() => setMouseHover(true)} onMouseLeave={() => setMouseHover(false)}>
      <div
        className={`w-full  h-full bg-[#006350] rounded-t-3xl  shadow-white overflow-hidden   flex  justify-evenly p-4 text-white ${
          mouseHover ? "fadein" : "hidden"
        }`}
        style={{ boxShadow: "0px -4px 6px -1px #fff" }}
      >
        Footer
      </div>
    </div>
  );
}

export default Footer;
