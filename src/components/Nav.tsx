import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { Folder, File } from "react-feather";
import { useState } from "react";


type Props = {};

function Nav({ }: Props) {
  const router = useRouter();

  const [hidden, setHidden] = useState(false)


  const rootFolder = {
    name: "/home/arman",
    type: "folder",
    parent: null, 
    children: [
      {
        name: "projects",
        type: "folder",
        path: "/projects",
        parent: rootFolder,
        children: [],
      },
      {
        name: "skills",
        type: "folder",
        path: "/skills",
      },
      {
        name: "contact",
        type: "folder",
        path: "/contact",
      },
      {
        name: "index.tsx",
        type: "file",
        path: "/"
      }
    ]
  }


  const textMaker = (inputPath: typeof router.pathname) => {
    const preface = "/home/arman"
    return preface + inputPath;
  }


  return (
    <nav className="w-full flex flex-col">
      <div className="absolute mt-2 h-[5vh] w-[23rem] flex self-center bg-white font rounded-t">
        <p className="self-center flex-auto">{textMaker(router.pathname)}</p> <p className="mr-3 mt-1" onClick={() => setHidden(!hidden)}>x</p></div>
      <div className="absolute mt-[5vh] h-[7rem] w-[23rem] flex self-center bg-white rounded-b opacity-30" style={{ display: hidden ? "none" : "" }}> </div>
      <div className="mx-auto">
        <ul className="grid grid-cols-4 mt-14" style={{ display: hidden ? "none" : "" }}>
          <li className="col-start-1"><Folder /></li>
          <li className="col-start-2"><Folder /></li>
          <li className="col-start-3"><Folder /></li>
          <li className="col-start-4"><File /></li>
        </ul>
        <ul className="grid grid-cols-4 -mt-6" style={{ display: hidden ? "none" : "" }}>
          <li className="col-start-1">Projects</li>
          <li className="col-start-2">Skills</li>
          <li className="col-start-3">Contact</li>
          <li className="col-start-4">index.tsx</li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
