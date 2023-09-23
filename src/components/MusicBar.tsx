// MusicBar.tsx
import React from 'react';
import { useRouter } from "next/router";
import { X } from 'react-feather';
import { useVisibilityStore } from '@/stores/visibilityStore';

type MusicBarProps = {
};

const MusicBar = ({ }: MusicBarProps) => {
  const musicVisible = useVisibilityStore((state) => state.musicVisible);
  const toggleMusic = useVisibilityStore((state) => state.toggleMusic);



  return (
    <>
      <div className="absolute mt-2 h-[2rem] w-[20rem] flex self-center bg-white font rounded-t address-bar" style={{ display: musicVisible ? "" : "none" }}>
        <p className="self-center flex-auto">Music Player</p>
        <p className="mr-3 my-auto " onClick={toggleMusic}>
          <X size={"1rem"} />
        </p>
      </div>
      <div
        className="absolute mt-[2rem] h-[7rem] w-[20rem] flex self-center bg-white rounded-b opacity-30"
        style={{ display: musicVisible ? "" : "none" }}
      >
      </div>
    </>
  );
};

export default MusicBar;

