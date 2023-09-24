// Nav.tsx

import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";
import { rootFolder, findFolderByPath } from "./FolderStructureHelper";
import AddressBar from "./AddressBar";
import FolderFileDisplay from "./FolderFileDisplay";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import withAppTemplate from "./withAppTemplate";

type Props = {
  dynamicTitle?: string;
};

function Nav({dynamicTitle}: Props) {
  const router = useRouter();
    const [localDynamicTitle, setLocalDynamicTitle] = useState<string | null>(null);

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
        <AddressBar setDynamicTitle={setLocalDynamicTitle} />
        <FolderFileDisplay currentFolder={currentFolder} />
      </nav>
    </Draggable>
  );
}

export default withAppTemplate(Nav, 'Explorer');
