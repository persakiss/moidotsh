//TerminalContainer.tsx
import React, { useState } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import router from "next/router";

type Props = {};

function TerminalContainer({}: Props) {
  const [hidden, setHidden] = useState(false);

  // State to track position
  const [currentPosition, setCurrentPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  // Update the position state when dragging occurs
  const handleDrag = (e: DraggableEvent, data: DraggableData) => {
    setCurrentPosition({ x: data.x, y: data.y });
  };

  return (
    <Draggable position={currentPosition} onDrag={handleDrag} bounds="parent">
      <div
        style={{
          zIndex: 2000,
          position: "absolute",
          width: "66.66%",
          height: "50vh",
        }}
      >
        <div
          className="bg-white rounded-t opacity-100 h-[5vh] flex justify-between items-center"
          style={{ display: "" }}
        >
          <div className="whitespace-nowrap pl-3 hover:cursor-default">
            st ~
          </div>
          <div className="whitespace-nowrap pr-3 hover:cursor-default">
            <p onClick={() => setHidden(!hidden)}>x</p>
          </div>
        </div>{ !hidden &&
        <div className="bg-white rounded-b opacity-30 h-[45vh]">
          <p className="p-3">{">"}</p>
        </div>
        }
      </div>
    </Draggable>
  );
}

export default TerminalContainer;
