// AddressBar.tsx
import React from 'react';
import { useRouter } from "next/router";
import { X } from 'react-feather';
import { useVisibilityStore } from '@/stores/visibilityStore';

type AddressBarProps = {
};

const AddressBar = ({ }: AddressBarProps) => {
  const router = useRouter();
  const explorerVisible = useVisibilityStore((state) => state.explorerVisible);
  const toggleExplorer = useVisibilityStore((state) => state.toggleExplorer);


  const textMaker = (inputPath: string) => {
    const preface = "/home/arman";
    return preface + inputPath;
  };

  return (
    <>
      <div className="absolute mt-2 h-[2rem] w-[20rem] flex self-center bg-white font rounded-t address-bar" style={{ display: explorerVisible ? "" : "none" }}>
        <p className="self-center flex-auto">{textMaker(router.pathname)}</p>{" "}
        <p className="mr-3 my-auto " onClick={toggleExplorer}>
          <X size={"1rem"} />
        </p>
      </div>
      <div
        className="absolute mt-[2rem] h-[7rem] w-[20rem] flex self-center bg-white rounded-b opacity-30"
        style={{ display: explorerVisible ? "" : "none" }}
      >
        {" "}
      </div>
    </>
  );
};

export default AddressBar;
