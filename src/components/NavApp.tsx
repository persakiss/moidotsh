//NavApp.tsx
import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { rootFolder, findFolderByPath } from "./FolderStructureHelper";
import { Folder, File } from "react-feather";
import withAppTemplate from "./withAppTemplate";
import BrowserApp from "./BrowserApp";
import { useVisibilityStore } from "@/stores/visibilityStore";
import { getContent } from "@/utils/contentMapping";

type Props = {
  setDynamicTitle?: (title: string) => void;
};

const NavApp: React.FC<Props> = ({ setDynamicTitle }) => {
  const setBrowserContent = useVisibilityStore(
    (state) => state.setBrowserContent
  );
  const toggleBrowserVisibility = useVisibilityStore(
    (state) => state.toggleBrowser
  );

  const setBrowserTitle = useVisibilityStore((state) => state.setBrowserTitle);

  const router = useRouter();

  const currentFolder = useMemo(
    () => findFolderByPath(router.pathname, rootFolder),
    [router.pathname]
  );

  // NavApp.tsx
  const setBrowserLoading = useVisibilityStore(
    (state) => state.setBrowserLoading
  );

  const getTitleFromFileName = (fileName: string): string => {
    const parts = fileName.split("/");
    const lastPart = parts[parts.length - 1];
    const nameWithoutExtension = lastPart.replace(".tsx", "");
    return (
      nameWithoutExtension.charAt(0).toUpperCase() +
      nameWithoutExtension.slice(1)
    );
  };

  const handleFileClick = async (fileName: string) => {
    // Show loading indicator
    setBrowserLoading(true);

    console.log("fetching ", fileName);

    const title = getTitleFromFileName(fileName); // getTitleFromFileName
    setBrowserTitle(`Browser | ${title}`);

    // Simulate loading delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Update content and title
    const content = getContent(fileName);
    setBrowserContent(content);
    setBrowserTitle(`Browser | ${fileName.replace(".tsx", "")}`);

    // Hide loading indicator
    setBrowserLoading(false);

    // Only toggle visibility if the browser is not already visible
    if (!useVisibilityStore.getState().browserVisible) {
      toggleBrowserVisibility();
    }
  };

  useEffect(() => {
    const newTitle = `/home/arman${router.pathname}`;
    setDynamicTitle!(newTitle);
  }, [router.pathname]);

  const sortedChildren = currentFolder
    ? [...currentFolder.children].sort((a, b) => {
        if (a.type === "folder" && b.type === "file") return -1;
        if (a.type === "file" && b.type === "folder") return 1;
        return 0;
      })
    : [];

  return (
    <div className="flex flex-col items-center w-full">
      <div className="mt-4 w-full">
        <ul className="grid grid-cols-4 mt-4 justify-between">
          {sortedChildren.map((child, index) => (
            <li className={`col-start-${index + 1} relative`} key={child.name}>
              {child.type === "folder" ? (
                <Link href={child.path || "#"}>
                  <div className="flex flex-col items-center gap-2 cursor-pointer z-[2000]">
                    <Folder />
                    <p className="text-xs">{child.name}</p>
                  </div>
                </Link>
              ) : (
                <div
                  className="flex flex-col items-center gap-2 z-[2000] cursor-pointer"
                  onClick={() =>
                    handleFileClick(router.pathname === "/" ? router.pathname + child.name : router.pathname + "/" + child.name)
                  }
                >
                  <File />
                  <p className="text-xs cursor-pointer select-none z-[2000]">
                    {child.name}
                  </p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// const declaration, title, dynamic title?, full size?
export default withAppTemplate(NavApp, "Explorer");
