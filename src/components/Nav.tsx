import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { Minus, GitCommit } from "react-feather";
import { useState } from "react";

type Props = {};

function Nav({}: Props) {
  const router = useRouter();

  const links = [["/"], ["/projects"], ["/skills"], ["/contact"]];

  const iconMaker = (path: string, index: number) => {
    return (
      <li key={index} className="">
        {router.pathname === path ? "|" : ""}
      </li>
    );
  };

  const iconsToJsx = (list: string[][]): JSX.Element[] => {
    return list.map((route, index) => {
      return iconMaker(route[0], index);
    });
  };

  // Abstracted this for some reason
  const linkMaker = (
    path: string,
    index: number,
    firstCapital: boolean,
    style: string = "",
    offStyle: string = ""
  ) => {
    let textOut;
    let onStyle;

    if (path === "/") {
      onStyle = "";
      textOut = "home";
    } else if (firstCapital) {
      textOut = path[1].toUpperCase() + path.substring(2);
    } else {
      textOut = path.substring(1);
    }

    return (
      <li
        className={router.pathname === path ? style + onStyle : offStyle}
        key={index}
      >
        <Link href={path} scroll={false} onClick={() => {}}>
          {textOut}
        </Link>
      </li>
    );
  };

  const linksToJsx = (list: string[][]): JSX.Element[] => {
    return list.map((route, index) => {
      return linkMaker(route[0], index, false);
    });
  };

  return (
    <nav className="w-full flex flex-col">
      <div className="mx-auto ">
        <ul className="flex justify-between relative">
          {iconsToJsx(links)}
          <style jsx>{`
            ul::before {
              content: "";
              position: absolute;
              top: 50%;
              left: 0;
              right: 0;
              height: 2px;
              background-color: black;
            }
          `}</style>
        </ul>
        <ul className="flex justify-between -mt-6">{linksToJsx(links)}</ul>
      </div>
    </nav>
  );
}

export default Nav;
