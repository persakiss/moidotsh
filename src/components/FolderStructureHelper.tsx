type Folder = {
  name: string;
  type: "folder";
  path?: string;
  parent?: Folder | null;
  children: (Folder | File)[];
};

type File = {
  name: string;
  type: "file";
  path?: string;
};

function initializeFolder(folder: Folder) {
  // If the folder has a parent, add the ".." folder
  if (folder.parent) {
    const upOneFolder: Folder = {
      name: "..",
      type: "folder",
      path: folder.parent.path,
      parent: folder.parent,
      children: [],
    };
    folder.children.push(upOneFolder);
  }

  // Add the index.tsx file
  const indexFile: File = {
    name: "index.tsx",
    type: "file",
  };
  folder.children.push(indexFile);
}

function findFolderByPath(path: string, startFolder: Folder): Folder | null {
  if (startFolder.path === path) {
    return startFolder;
  }
  for (const child of startFolder.children) {
    if (child.type === "folder") {
      const result = findFolderByPath(path, child as Folder);
      if (result) return result;
    }
  }
  return null;
}

const rootFolder: Folder = {
  name: "/home/arman",
  type: "folder",
  path: "/",
  parent: null,
  children: [],
};

initializeFolder(rootFolder);

const projectsFolder: Folder = {
  name: "projects",
  type: "folder",
  path: "/projects",
  parent: rootFolder,
  children: [],
};

initializeFolder(projectsFolder);

const skillsFolder: Folder = {
  name: "skills",
  type: "folder",
  path: "/skills",
  parent: rootFolder,
  children: [],
};

initializeFolder(skillsFolder);

const contactFolder: Folder = {
  name: "contact",
  type: "folder",
  path: "/contact",
  parent: rootFolder,
  children: [],
};

initializeFolder(contactFolder);

// add the children to the root folder
rootFolder.children.push(projectsFolder, skillsFolder, contactFolder);

export type { Folder, File };
export { rootFolder, initializeFolder, findFolderByPath };
