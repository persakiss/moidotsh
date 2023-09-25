import NotFoundKirby from "@/components/NotFoundKirby";
import Contact from "@/components/pages/Contact";
import HomePage from "@/components/pages/HomePage";
import Projects from "@/components/pages/Projects";
import Skills from "@/components/pages/Skills";

// ../utils/contentMapping.tsx
const contentMapping: { [key: string]: JSX.Element } = {
  "/index.tsx": <HomePage />, // fix this later lol
  "/projects/index.tsx": <Projects />,
  "/contact/index.tsx": <Contact />,
  "/skills/index.tsx": <Skills />,
};

export const getContent = (fileName: string) => {
  // console.log("Fetching content for:", fileName);
  return contentMapping[fileName] || <NotFoundKirby />;
};
