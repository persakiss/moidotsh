// MountainsContainer.tsx

import { useState, useEffect } from "react";
import MountainBackground from "@/components/MountainBackground";

interface MountainContainerProps {
  className?: string;
  colorGroup: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';
}

const MountainContainer = ({ colorGroup, className }: MountainContainerProps) => {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  const initialMountains = [
    { id: Date.now() + 1 },
    { id: Date.now() + 2 },
    { id: Date.now() + 3 }
  ];

  const [mountains, setMountains] = useState(initialMountains);

  return (
    <div className={'relative ' + className}>
      {isMounted && <MountainBackground colorGroup={colorGroup} />}
    </div>
  );
};

export default MountainContainer;

