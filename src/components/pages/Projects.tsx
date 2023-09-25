// Projects.tsx
import React from "react";
import Image from "next/image";
import mangata from "../../../public/pages/projects/mangata.jpg";
import moidotsh from "../../../public/pages/projects/moidotsh.jpg";
import qep from "../../../public/pages/projects/qep.jpg";
import nextqep from "../../../public/pages/projects/next-qep.jpg";
import ProjectFullView from "./ProjectFullView";

type Props = {};

function Projects({}: Props) {
  const [selectedProject, setSelectedProject] = React.useState<string | null>(
    null
  );

  const handleProjectClick = (project: string) => {
    setSelectedProject(project);
  };

  if (selectedProject) {
    return (
      <ProjectFullView
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-2 h-full pr-2 pl-2 pt-2 bg-gray-100">
        {/* Top Left Column */}
        <div
          onClick={() => handleProjectClick("mangata")}
          className="col-span-1 bg-white p-2 rounded-lg flex flex-col items-center justify-center cursor-pointer"
        >
          <Image src={mangata} alt="Mangata & Gallo" width={100} height={100} />
          <p className="text-xs text-gray-600 pt-1">
            <strong>Mangata & Gallo:</strong> HTML/CSS Grid
          </p>
        </div>

        {/* Top Right Column */}
        <div
          onClick={() => handleProjectClick("moidotsh")}
          className="col-span-1 bg-white p-2 rounded-lg flex flex-col items-center justify-center cursor-pointer"
        >
          <Image src={moidotsh} alt="Moi.sh" width={100} height={100} />
          <p className="text-xs text-gray-600 pt-1">
            <strong>Moi.sh:</strong> NextJS, Framer, Typescript
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 h-full pl-2 pr-2 pt-2 pb-2 bg-gray-100">
        {/* Bottom Left Column */}

        <div
          onClick={() => handleProjectClick("qep")}
          className="col-span-1 bg-white p-2 rounded-lg flex flex-col items-center justify-center cursor-pointer"
        >
          <Image src={qep} alt="QEP" width={100} height={100} />
          <p className="text-xs text-gray-600 pt-1">
            <strong>QEP:</strong> React, Typescript, Vite
          </p>
        </div>

        {/* Bottom Right Column */}
        <div
          onClick={() => handleProjectClick("qep-next")}
          className="col-span-1 bg-white p-2 rounded-lg flex flex-col items-center justify-center cursor-pointer"
        >
          <Image src={nextqep} alt="QEP" width={100} height={100} />
          <p className="text-xs text-gray-600 pt-1">
            <strong>QEP-Next:</strong> NextJS, Framer, SSR
          </p>
        </div>
      </div>
    </>
  );
}

export default Projects;
