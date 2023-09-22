import React, { useState, ChangeEvent, KeyboardEvent } from "react";

type TextInputProps = {
  changeLine: (count: number) => void;
  initialValue: string;
  handleCommandExecution: (commandInput: string) => void;
  afterEnter?: () => void;
};

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ changeLine, initialValue, handleCommandExecution, afterEnter }, ref) => {
  const [width, setWidth] = useState(0);
  const [count, setCount] = useState(0);

  const changeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setWidth(evt.target.value.length);
  };

const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
  if (e.key === "Enter") {
    handleCommandExecution(e.currentTarget.value);
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

