import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { useRouter } from "next/router";

type TextInputProps = {
  changeLine: (count: number) => void;
  initialValue: string;
  handleCommandExecution: (commandInput: string, router: ReturnType<typeof useRouter>) => void;
  afterEnter?: () => void;
  router: ReturnType<typeof useRouter>;
};

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ router, changeLine, initialValue, handleCommandExecution, afterEnter }, ref) => {
    const [width, setWidth] = useState(0);
    const [count, setCount] = useState(0);

    const changeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
      setWidth(evt.target.value.length);
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleCommandExecution(e.currentTarget.value, router); // Use the router prop directly
        setCount((prevCount) => prevCount + 1);
        changeLine(count);
        if (afterEnter) {
          afterEnter();
        }
      }
    };




    return (
      <div className={`s${count}`}>
        <input
          ref={ref}
          type="text"
          style={{ width: `${width}ch` }}
          autoFocus
          onChange={changeHandler}
          id="console"
          spellCheck="false"
          autoComplete="off"
          name="hidden"
          onKeyPress={handleKeyPress}
          className="bg-transparent border-none outline-none caret-transparent font-fira-code"
        />
      </div>
    );
  });

TextInput.displayName = "TextInput";

export default TextInput;

