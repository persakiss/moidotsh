import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

function Nav({ }: Props) {
  const router = useRouter();


  // Abstracted this for some reason
  const linkMaker = (path: string, name: string, style: string, offStyle = '') => {
    return (
      <li className={router.pathname === path ? style : offStyle}>
        <Link href={path} scroll={false}>{name}</Link>
      </li>
    )
  }

  return (
    <nav className="w-full flex mt-10">
      <ul className="flex-auto">
       {linkMaker('/',          'Home', 'underline')}
       {linkMaker('/projects',  'Projects', 'underline')}
       {linkMaker('/skills',    'Skills', 'underline')}
       {linkMaker('/contact',   'Contact', 'underline')}
      </ul>
    </nav>
  );
}

export default Nav;
