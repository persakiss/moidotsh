// ProjectFullView.tsx

import React from "react";
import Image from "next/image";
import { ArrowLeft, SkipBack } from "react-feather";

import mangata from "../../../public/pages/projects/mangata.jpg";
import moidotsh from "../../../public/pages/projects/moidotsh.jpg";
import qep from "../../../public/pages/projects/qep.jpg";
import nextqep from "../../../public/pages/projects/next-qep.jpg";

type ProjectFullViewProps = {
  project: string;
  onClose: () => void;
};

const ProjectFullView: React.FC<ProjectFullViewProps> = ({
  project,
  onClose,
}) => {
  let content;
  if (project === "mangata") {
    content = (
      <>
        <Image src={mangata} alt="Mangata & Gallo" width={300} height={300} />
        <h1 className="text-2xl font-bold pt-4">Mangata & Gallo</h1>
        <p className="text-sm pt-2">
          A fictional jewelry website showcasing my skills in HTML/CSS grid
          layouts and responsive design.
        </p>
        <div className="pt-4 flex space-x-4">
          <a href="#" className="text-blue-500 underline">
            Demo
          </a>
          <a href="#" className="text-blue-500 underline">
            GitHub
          </a>
        </div>
      </>
    );
  }
  if (project === "moidotsh") {
    content = (
      <>
        <Image src={moidotsh} alt="Moi.sh" width={300} height={300} />
        <h1 className="text-2xl font-bold pt-4">Moi.sh</h1>
        <p className="text-sm pt-2">
          An emulated desktop experience built as a portfolio website. Utilizes
          Next.js for SSR, Framer for smooth animations, and TypeScript for type
          safety.
        </p>
        <div className="pt-4 flex space-x-4">
          <a href="#" className="text-blue-500 underline">
            Demo
          </a>
          <a href="#" className="text-blue-500 underline">
            GitHub
          </a>
        </div>
      </>
    );
  }
  if (project === "qep") {
    content = (
      <>
        <Image src={qep} alt="QEP" width={300} height={300} />
        <h1 className="text-2xl font-bold pt-4">QuickExtenderPro</h1>
        <p className="text-sm pt-2">
          A single-page application built with React and TypeScript, using Vite
          as the build tool. Converted DVD instructions into an interactive SPA.
        </p>
        <div className="pt-4 flex space-x-4">
          <a href="#" className="text-blue-500 underline">
            Demo
          </a>
          <a href="#" className="text-blue-500 underline">
            GitHub
          </a>
        </div>
      </>
    );
  }
  if (project === "qep-next") {
    content = (
      <>
        <Image src={nextqep} alt="QEP-Next" width={300} height={300} />
        <h1 className="text-2xl font-bold pt-4">QEP-Next</h1>
        <p className="text-sm pt-2">
          A prototypal demo using Next.js and Framer to navigate between routes
          without a full-page refresh. Demonstrates the power of SSR for
          improved performance.
        </p>
        <div className="pt-4 flex space-x-4">
          <a href="#" className="text-blue-500 underline">
            Demo
          </a>
          <a href="#" className="text-blue-500 underline">
            GitHub
          </a>
        </div>
      </>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-10 -mt-8 bg-white rounded text-black"
      >
        <ArrowLeft size={16} />
      </button>
      {content}
    </div>
  );
};

export default ProjectFullView;
