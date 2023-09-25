import React from 'react';

type SkillCardProps = {
  title: string;
  onClick: () => void;
};

const SkillCard: React.FC<SkillCardProps> = ({ title, onClick }) => {
  return (
    <div className="bg-white p-2 rounded-lg cursor-pointer" onClick={onClick}>
      <h2 className="text-sm font-semibold">{title}</h2>
    </div>
  );
};

export default SkillCard;
