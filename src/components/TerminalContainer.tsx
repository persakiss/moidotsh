import React from "react";

type Props = {};

function TerminalContainer({}: Props) {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mr-10 z-[100] bg-white rounded opacity-30 h-[50vh] w-3/5"></div>
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mr-10 z-[100] bg-white rounded-t opacity-100 h-[5vh] w-3/5 ">
        <div className="grid grid-cols-11 h-full">
          <div className="col-start-2 lg:col-start-2 my-auto whitespace-nowrap">st ~</div>
          <div className="col-start-11 my-auto whitespace-nowrap">_   . x</div>
        </div>
      </div>

      <div className="absolute mt-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mr-10 z-[100] rounded h-[50vh] w-2/7">
        <h2>Your Title Here</h2>
        <img src="/path/to/your/image.jpg" alt="Description" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          labore omnis, vel aliquam aperiam mollitia corporis non corrupti,
          consectetur suscipit aut repudiandae? Inventore, necessitatibus
          aperiam dignissimos quod eum libero nam.
        </p>
      </div>
    </>
  );
}

export default TerminalContainer;
