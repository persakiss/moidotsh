import React from "react";
import Image from "next/image";
import mangata from "../../../public/pages/projects/mangata.jpg";
import moidotsh from "../../../public/pages/projects/moidotsh.jpg";
import qep from "../../../public/pages/projects/qep.jpg";
import hayclass from "../../../public/pages/projects/hayclass.jpg";
import cinemart from "../../../public/pages/projects/cinemart.jpg";
import nextqep from "../../../public/pages/projects/next-qep.jpg";
import ProjectFullView from "./ProjectFullView";
import { StaticImageData } from "next/image";

type Props = {};

type Project = {
  id: string;
  image: StaticImageData;
  altText: string;
  title: string;
  techStack: string;
};

const projects: Project[] = [
  { id: "mangata", image: mangata, altText: "Mangata & Gallo", title: "Mangata & Gallo", techStack: "HTML/CSS Grid" },
  { id: "moidotsh", image: moidotsh, altText: "Moi.sh", title: "Moi.sh", techStack: "NextJS, Framer, Typescript" },
  { id: "qep", image: qep, altText: "QEP", title: "QEP", techStack: "React, Typescript, Vite" },
  { id: "qep-next", image: nextqep, altText: "QEP-Next", title: "QEP-Next", techStack: "NextJS, Framer, SSR" },
  { id: "cinemart", image: cinemart, altText: "Cinemart", title: "Cinemart", techStack: "React, MDBootstrap" },
  { id: "hayclass", image: hayclass, altText: "HayClass", title: "HayClass", techStack: "HTML, CSS, Vanilla JS, Bootstrap" }
];


function Projects({}: Props) {
  const [selectedProject, setSelectedProject] = React.useState<string | null>(null);

  const handleProjectClick = (project: string) => {
    setSelectedProject(project);
  };

  if (selectedProject) {
    return <ProjectFullView project={selectedProject} onClose={() => setSelectedProject(null)} />;
  }

  return (
    <div className="grid grid-cols-2 gap-2 h-full pr-2 pl-2 pt-2 bg-gray-100">
      {projects.map((project) => (
        <div
          key={project.id}
          onClick={() => handleProjectClick(project.id)}
          className="col-span-1 bg-white p-2 rounded-lg flex flex-col items-center justify-center cursor-pointer"
        >
          <Image src={project.image} alt={project.altText} width={100} height={100} />
          <p className="text-xs text-gray-600 pt-1">
            <strong>{project.title}:</strong> {project.techStack}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Projects;

