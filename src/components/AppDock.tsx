import React, { useState } from "react";
import { Terminal, Music, Briefcase } from "react-feather";
import { useVisibilityStore } from "@/stores/visibilityStore";

type Props = {
};

function AppDock({ }: Props) {
  const explorerVisible = useVisibilityStore((state) => state.explorerVisible);
  const toggleExplorer = useVisibilityStore((state) => state.toggleExplorer);
  const terminalVisible = useVisibilityStore((state) => state.terminalVisible);
  const toggleTerminal = useVisibilityStore((state) => state.toggleTerminal);
  const musicVisible = useVisibilityStore((state) => state.musicVisible);
  const toggleMusic = useVisibilityStore((state) => state.toggleMusic);

  const Apps = [
    { name: "Terminal", icon: <Terminal />, visible: terminalVisible },
    { name: "Explorer", icon: <Briefcase />, visible: explorerVisible },
    { name: "Music", icon: <Music />, visible: musicVisible },
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
                onClick={() => {
                  app.name === "Explorer" && toggleExplorer();
                  app.name === "Terminal" && toggleTerminal();
                  app.name === "Music" && toggleMusic()
                }}
              >
                <div className="bg-white w-20 h-20 flex flex-col justify-center items-center rounded transform transition-transform hover:-translate-y-5">
                  {app.icon}
                  <span className="select-none">{app.name.toLowerCase()}</span>
                </div>
                <div
                  style={{
                    background: app.visible === false ? "white" : "",
                  }}
                  className="absolute w-3 mt-16 h-3 rounded-full "
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
