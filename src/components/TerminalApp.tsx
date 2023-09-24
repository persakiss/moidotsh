// TerminalApp.tsx

import React, { useState, useRef, useEffect } from "react";
import TextInput from "./TextInput";
import LeftText from "./LeftText";
import BlinkingCaret from "./BlinkingCaret";
import * as commands from '../utils/commands';
import { useRouter } from "next/router";
import withAppTemplate from './withAppTemplate';



type TerminalAppProps = {
  setDynamicTitle: (title: string | JSX.Element) => void;
};


const TerminalApp: React.FC<TerminalAppProps> = ({ setDynamicTitle }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [lines, setLines] = useState<string[]>(['']);

  const router = useRouter();

  const getDynamicTitle = () => (
    <>
      <span className="sm:inline hidden">st ~</span>
      <span className="sm:hidden inline text-sm"><LeftText path={router.pathname} /></span>
    </>
  );

  useEffect(() => {
    setDynamicTitle(getDynamicTitle());
  }, [router.pathname]);



  const changeLine = (lineNumber: number) => {
    const newLines = [...lines];
    newLines[lineNumber] = '';
    newLines.push('');
    setLines(newLines);
  };

  const handleTextAreaClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCommandExecution = (commandInput: string) => {
    const [command, ...args] = commandInput.split(' ');

    const commandHandler = commands[command as keyof typeof commands];

    if (commandHandler) {
      commandHandler(args, router);
    } else {
      console.error("Command not found");
    }
  };

  return (
    <div onClick={handleTextAreaClick} className="w-full overflow-hidden">
      <div className="pt-3"></div>
      {lines.map((lineContent, index) => (
        <div key={index} className="flex overflow-hidden">
          <div className="hidden sm:block">
            <LeftText path={router.pathname} />
          </div>
          <p className="font-fira-code pr-2 sm:hidden inline">$</p>
          <TextInput handleCommandExecution={handleCommandExecution} ref={inputRef} changeLine={() => changeLine(index)} initialValue={lineContent} />
          {index === lines.length - 1 && <BlinkingCaret />}
        </div>
      ))}
    </div>
  );
};

export default withAppTemplate(TerminalApp, 'Terminal', (router) => (
  <>
    <span className="sm:inline hidden">st ~</span>
    <span className="sm:hidden inline"><LeftText path={router.pathname} /></span>
  </>
));
