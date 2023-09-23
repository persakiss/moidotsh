import React from 'react';
import Link from "next/link";
import { Folder, File } from "react-feather";
import { Folder as FolderType } from "./FolderStructureHelper";
import { useVisibilityStore } from '@/stores/visibilityStore';

type FolderFileDisplayProps = {
  currentFolder: FolderType | null;
};

const FolderFileDisplay = ({ currentFolder }: FolderFileDisplayProps) => {
  const explorerVisible = useVisibilityStore((state) => state.explorerVisible);

  if (!explorerVisible || !currentFolder) return null;

  const sortedChildren = [...currentFolder.children].sort((a, b) => {
    if (a.type === "folder" && b.type === "file") return -1;
    if (a.type === "file" && b.type === "folder") return 1;
    return 0;
  });

  return (
    <div className="mx-auto">
      <ul className="grid grid-cols-4 mt-16">
        {sortedChildren.map((child, index) => (
          <li className={`col-start-${index + 1} relative`} key={child.name}>
            {child.type === "folder" ? (
              <Link href={child.path || "#"} scroll={false}>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                  <Folder />
                  <p className="text-xs">{child.name}</p>
                </div>
              </Link>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <File />
                <p className="text-xs">{child.name}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FolderFileDisplay;

