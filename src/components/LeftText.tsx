// LeftText.tsx
import React from 'react';

type LeftTextProps = {
  path: string;
};

const LeftText: React.FC<LeftTextProps> = ({ path }) => {
  const displayPath = path === '/' ? '~' : path.substring(1);
  const userSystem = `[arman@moi.sh ${displayPath}]$ `;

  return (
    <span className="select-none pr-2 whitespace-nowrap font-fira-code">
        {userSystem}
    </span>
  );
}

export default LeftText;

