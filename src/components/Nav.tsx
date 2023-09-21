// Nav.tsx

import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { useState } from "react";
import {
  rootFolder,
  findFolderByPath,
} from "./FolderStructureHelper";
import AddressBar from "./AddressBar";
import FolderFileDisplay from "./FolderFileDisplay";

type Props = {};

function Nav({}: Props) {
  const router = useRouter();

  const [hidden, setHidden] = useState(false);

  const currentFolder = useMemo(
    () => findFolderByPath(router.pathname, rootFolder),
    [router.pathname]
  );

  return (
    <nav className="w-full flex flex-col">
      <AddressBar hidden={hidden} toggleHidden={() => setHidden(!hidden)} />
      <FolderFileDisplay currentFolder={currentFolder} hidden={hidden} />
    </nav>
  );
}

export default Nav;
