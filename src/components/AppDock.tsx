import React, { useState } from "react";
import { Terminal, Music, Briefcase } from "react-feather";

type Props = {
  explorerHidden: boolean;
  setExplorerHidden(newVal: boolean): void;
};

function AppDock({ explorerHidden, setExplorerHidden }: Props) {
  const Apps = [
    { name: "Terminal", icon: <Terminal />, hidden: explorerHidden },
    { name: "Explorer", icon: <Briefcase /> },
    { name: "Music", icon: <Music /> },
  ];

  const [bouncing, setBouncing] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setBouncing(index);
  };

  const handleAnimationEnd = () => {
    setBouncing(null);
  };

  return (
    <div className="absolute w-full flex bottom-0 justify-center">
      <div className="z-[2000]">
        <div className="w-[60vh] text-center">
          <ul className="list-none flex justify-evenly items-center">
            {Apps.map((app, index) => (
              <li
                key={index}
                className="flex flex-col items-center bottom-10 w-20 relative cursor-default"
                onClick={() =>
                  app.name === "Explorer" && setExplorerHidden(!explorerHidden)
                }
              >
                <div className="bg-white w-20 h-20 flex flex-col justify-center items-center rounded transform transition-transform hover:-translate-y-5">
                  {app.icon}
                  <span className="select-none">{app.name.toLowerCase()}</span>
                </div>
                <div
                  style={{
                    background: app.hidden === false ? "white" : "",
                  }}
                  className="absolute mt-24 w-3 h-3 rounded-full"
                ></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AppDock;
