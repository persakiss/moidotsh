//TerminalContainer.tsx
import React, { useState, useRef } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { X } from "react-feather";
import TextInput from "./TextInput";
import LeftText from "./LeftText";
import BlinkingCaret from "./BlinkingCaret";
import * as commands from '../utils/commands';
import { useRouter } from "next/router";

type Props = {};

function TerminalContainer({ }: Props) {
  const [hidden, setHidden] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [lines, setLines] = useState<string[]>(['']);

  const router = useRouter();

  const changeLine = (lineNumber: number) => {
    const newLines = [...lines];
    newLines[lineNumber] = ''; // Reset current line content
    newLines.push('');         // Add new empty line
    setLines(newLines);
  };


  const handleTextAreaClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // State to track position
  const [currentPosition, setCurrentPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  // Update the position state when dragging occurs
  const handleDrag = (e: DraggableEvent, data: DraggableData) => {
    setCurrentPosition({ x: data.x, y: data.y });
  };

  function handleCommandExecution(commandInput: string) {
    const [command, ...args] = commandInput.split(' ');

    const commandHandler = commands[command as keyof typeof commands];

    if (commandHandler) {
      commandHandler(args, router);  // <-- Pass the router instance here.
    } else {
      console.error("Command not found");
    }
  }

  return (
    <Draggable position={currentPosition} onDrag={handleDrag} bounds="parent">
      <div
        onClick={handleTextAreaClick}
        style={{
          zIndex: 2000,
          position: "absolute",
          width: "66.66%",
          height: "50vh",
          bottom: "2rem",
          right: "2rem"
        }}
      >
        <div
          className="bg-white rounded-t opacity-100 h-[2rem] flex justify-between items-center"
          style={{ display: "" }}
        >
          <div className="whitespace-nowrap pl-3 hover:cursor-default">
            st ~
          </div>
          <div className="whitespace-nowrap pr-3 hover:cursor-default">
            <p onClick={() => setHidden(!hidden)}><X size={"1rem"} /></p>
          </div>
        </div>{!hidden &&
          <div className="bg-white bg-opacity-30 rounded-b h-[45vh] overflow-hidden">
            <div className="pt-3"></div>
            {lines.map((lineContent, index) => (
              <div key={index} className="flex pl-3 overflow-hidden">
                <LeftText path={router.pathname} />
                <TextInput handleCommandExecution={(commandInput) => handleCommandExecution(commandInput, router)} ref={inputRef} changeLine={() => changeLine(index)} initialValue={lineContent} />
                {index === lines.length - 1 && <BlinkingCaret />} {/* Only render caret for the last line */}
              </div>
            ))}
          </div>
        }
      </div>
    </Draggable>
  );
}

export default TerminalContainer;
