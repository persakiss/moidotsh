import React from 'react';
import Link from "next/link";
import { Folder, File } from "react-feather";
import { Folder as FolderType, File as FileType } from "./FolderStructureHelper";

type FolderFileDisplayProps = {
    currentFolder: FolderType | null;
    hidden: boolean;
};

const FolderFileDisplay = ({ currentFolder, hidden }: FolderFileDisplayProps) => {
    return (
        <div className="mx-auto">
            <ul
                className="grid grid-cols-4 mt-16"
                style={{ display: hidden ? "none" : "" }}
            >
                {currentFolder?.children
                    .sort((a, b) => {
                        if (a.type === "folder" && b.type === "file") return -1;
                        if (a.type === "file" && b.type === "folder") return 1;
                        return 0;
                    })
                    .map((child, index) => (
                        <li
                            className={`col-start-${index + 1} relative`}
                            key={child.name}
                        >
                            {child.type === "folder" ? (
                                <Link href={child.path || "#"} scroll={false}>
                                    <Folder />
                                </Link>
                            ) : (
                                <File />
                            )}
                        </li>
                    ))}
            </ul>

            <ul
                className="grid grid-cols-4 -mt-6"
                style={{ display: hidden ? "none" : "" }}
            >
                {currentFolder?.children
                    .sort((a, b) => {
                        if (a.type === "folder" && b.type === "file") return -1;
                        if (a.type === "file" && b.type === "folder") return 1;
                        return 0;
                    })
                    .map((child, index) => (
                        <li
                            className={`col-start-${index + 1} relative`}
                            key={child.name}
                        >
                            {child.type === "folder" ? (
                                <Link href={child.path || "#"} scroll={false}>
                                    <p className="text-xs">{child.name}</p>
                                </Link>
                            ) : (
                                <p className="text-xs">{child.name}</p>
                            )}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default FolderFileDisplay;
