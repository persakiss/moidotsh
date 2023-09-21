import React, { useState } from "react";

type Props = {};

function TerminalContainer({}: Props) {

const [hidden, setHidden] = useState(false);

  return (
    <>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-8 ml-9 z-[1000] bg-white rounded opacity-30 h-[50vh] w-2/3" style={{display: hidden ? "none" : ""}}></div>
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-8 ml-9 z-[1000] bg-white rounded-t opacity-100 h-[5vh] w-2/3 ">
        <div className="flex justify-between h-full">
          <div className="my-auto whitespace-nowrap pl-3 hover:cursor-default">st ~</div>
          <div className="my-auto whitespace-nowrap pr-3 hover:cursor-default"><p onClick={() => {
            setHidden(!hidden);
            console.log("clicked")
            console.log(hidden)
          }}>x</p></div>
        </div>
      </div>

      <div className="absolute mt-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mr-10 z-[100] rounded h-[50vh] w-2/7">
      </div>
    </>
  );
}

export default TerminalContainer;
