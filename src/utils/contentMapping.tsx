// ../utils/contentMapping.tsx
const contentMapping: { [key: string]: JSX.Element } = {
  "/index.tsx": <h2>Home Page</h2>, // fix this later lol
  "/contact/index.tsx": <h2>Contact Page</h2>,
  "/projects/index.tsx": <h2>Projects</h2>,
  "/skills/index.tsx": <h2>Skills</h2>
};

export const getContent = (fileName: string) => {
  // console.log("Fetching content for:", fileName);
  return contentMapping[fileName] || <h2>File not found</h2>;
};
