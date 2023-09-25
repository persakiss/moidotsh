// Skills.tsx

import React, { useState } from 'react';
import SkillCard from './SkillCard';
import SkillDetail from './SkillDetail';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const handleSkillClick = (skill: string) => {
    setSelectedSkill(skill);
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-4 bg-gray-100">
      <SkillCard title="Languages" onClick={() => handleSkillClick('Languages')} />
      <SkillCard title="Frameworks" onClick={() => handleSkillClick('Frameworks')} />
      <SkillCard title="Tools" onClick={() => handleSkillClick('Tools')} />
      <SkillCard title="Soft Skills" onClick={() => handleSkillClick('Soft Skills')} />
      {selectedSkill && <SkillDetail skill={selectedSkill} />}
    </div>
  );
};

export default Skills;
