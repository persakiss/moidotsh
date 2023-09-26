// ProjectFullView.tsx

import React from "react";
import Image from "next/image";
import { ArrowLeft } from "react-feather";

import hayclass from "../../../public/pages/projects/hayclass.jpg";
import cinemart from "../../../public/pages/projects/cinemart.jpg";
import mangata from "../../../public/pages/projects/mangata.jpg";
import moidotsh from "../../../public/pages/projects/moidotsh.jpg";
import qep from "../../../public/pages/projects/qep.jpg";
import nextqep from "../../../public/pages/projects/next-qep.jpg";
import { githubUrl } from "@/assets/userInfo";


const projects = [
  {
    id: "mangata",
    image: mangata,
    title: "Mangata & Gallo",
    description: "A fictional jewelry website showcasing my skills in HTML/CSS grid layouts and responsive design.",
    demoLink: "https://jewelry-website-flax.vercel.app",
    githubLink: githubUrl + 'jewelry-website',
    demoLinkWorking: true,
    githubLinkWorking: true,
  },
  {
    id: "moidotsh",
    image: moidotsh,
    title: "Moi.sh",
    description: "An emulated desktop experience built as a portfolio website. Utilizes Next.js for SSR, Framer for smooth animations, and TypeScript for type safety.",
    demoLink: "#",
    githubLink: githubUrl + 'moidotsh',
    demoLinkWorking: false,
    githubLinkWorking: true,
  },
  {
    id: "qep",
    image: qep,
    title: "QuickExtenderPro",
    description: "A single-page application built with React and TypeScript, using Vite as the build tool. Converted DVD instructions into an interactive SPA.",
    demoLink: "https://instructions.quickextenderpro.com",
    githubLink: "#",
    demoLinkWorking: true,
    githubLinkWorking: false,
  },
  {
    id: "qep-next",
    image: nextqep,
    title: "QEP-Next",
    description: "A prototypal demo using Next.js and Framer to navigate between routes without a full-page refresh. Demonstrates the power of SSR for improved performance.",
    demoLink: "https://next-framer-test.vercel.app",
    githubLink: githubUrl + "next-framer-test",
    demoLinkWorking: true,
    githubLinkWorking: true,
  },
  {
    id: "cinemart",
    image: cinemart,
    title: "Cinemart",
    description: "A simple page-piling proof of concept made for a cinema in Vanadzor, Armenia, using React, JS, MDBootstrap.",
    demoLink: "#",
    githubLink: "#",
    demoLinkWorking: true,
    githubLinkWorking: false,
  },
  {
    id: "hayclass",
    image: hayclass,
    title: "Hayclass",
    description: "A website made for war-displaced teachers from the Nagorno-Karabakh region to continue teaching online.",
    demoLink: "https://web.archive.org/web/20220627223823/hayclass.org",
    githubLink: "#",
    demoLinkWorking: true,
    githubLinkWorking: false,
  },
];

type ProjectFullViewProps = {
  project: string;
  onClose: () => void;
};

const ProjectFullView: React.FC<ProjectFullViewProps> = ({
  project,
  onClose,
}) => {
  const selectedProject = projects.find((p) => p.id === project);

  const linkWorkingButton = 'bg-orange-400 p-2 rounded no-underline text-white';
  const linkNotWorkingButton = 'pointer-events-none bg-gray-500 p-2 rounded text-white';

  if (!selectedProject) return null;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-10 -mt-8 bg-white rounded text-black"
      >
        <ArrowLeft size={16} />
      </button>
      <Image src={selectedProject.image} alt={selectedProject.title} width={300} height={300} />
      <h1 className="text-2xl font-bold pt-4">{selectedProject.title}</h1>
      <p className="text-sm pt-2">{selectedProject.description}</p>
      <div className="pt-4 flex space-x-4">
        <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer" className={selectedProject.demoLinkWorking ? linkWorkingButton : linkNotWorkingButton}>
          Demo
        </a>
        <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className={selectedProject.githubLinkWorking ? linkWorkingButton : linkNotWorkingButton}>
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectFullView;
