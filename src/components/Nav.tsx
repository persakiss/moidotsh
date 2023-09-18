import Link from "next/link";
import React from "react";

type Props = {};

function Nav({}: Props) {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/" scroll={false}>Home</Link>
        </li>
        <li>
          <Link href="/about" scroll={false}>About</Link>
        </li>
        <li>
          <Link href="/science" scroll={false}>Science</Link>
        </li>
        <li>
          <Link href="/cart" scroll={false}>Cart</Link>
        </li>
        <li>
          <Link href="/contact" scroll={false}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
