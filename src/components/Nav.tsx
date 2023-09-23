// Nav.tsx

import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { useState } from "react";
import { rootFolder, findFolderByPath } from "./FolderStructureHelper";
import AddressBar from "./AddressBar";
import FolderFileDisplay from "./FolderFileDisplay";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { useVisibilityStore } from "@/stores/visibilityStore";

type Props = {
};

function Nav({}: Props) {
  const router = useRouter();
  const explorerVisible = useVisibilityStore((state) => state.explorerVisible)
  const toggleExplorer = useVisibilityStore((state) => state.toggleExplorer)

  const currentFolder = useMemo(
    () => findFolderByPath(router.pathname, rootFolder),
    [router.pathname]
  );

  // State to trak position
  const [currentPosition, setCurrentPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  // Update the position state when dragging occurs.
  const handleDrag = (e: DraggableEvent, data: DraggableData) => {
    setCurrentPosition({ x: data.x, y: data.y });
  };

  return (
    <Draggable position={currentPosition} onDrag={handleDrag} handle=".address-bar">
      <nav className="w-full flex flex-col">
        <AddressBar />
        <FolderFileDisplay currentFolder={currentFolder} explorerVisible={explorerVisible} />
      </nav>
    </Draggable>
  );
}

export default Nav;
