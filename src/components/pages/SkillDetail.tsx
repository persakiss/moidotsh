// SkilDetail.tsx

import React from "react";

type SkillDetailProps = {
  skill: string;
};

const SkillDetail: React.FC<SkillDetailProps> = ({ skill }) => {
  let content;
  if (skill === "Languages") {
    content = (
      <>
        <p>HTML, CSS, JS, TS</p>
        <p>
          <span>Learning:</span> Rust, C
        </p>
      </>
    );
  } else if (skill === "Frameworks") {
    content = (
      <>
        <p>React, React Native, Expo, Tamagui, NextJS, Tailwind</p>
        <p>
          <span>Interested in:</span> HTMX, Svelte, Vue
        </p>
      </>
    );
  } else if (skill === "Tools") {
    content = <p>Git, Linux, Node, Express, Vim, VSCode, SSH, Vercel, Nginx</p>;
  } else if (skill === "Soft Skills") {
    content = (
      <>
        <p>Problem-Solving, Teamwork</p>
        <p>Effective Communication</p>
        <p>Coachable, Humble, Motivated</p>
      </>
    );
  }

  return (
    <div className="bg-white p-2 rounded-lg col-span-2">
      <h2 className="text-sm font-semibold">{skill}</h2>
      {content}
    </div>
  );
};

export default SkillDetail;
