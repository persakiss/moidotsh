// MountainsContainer.tsx

import { useState, useEffect } from "react";
import MountainBackground from "@/components/MountainBackground";

interface MountainContainerProps {
  className?: string;
  colorGroup: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';
  setMountainDetails: (details: any[]) => void;  // We're making this prop mandatory here
}

const MountainContainer = ({ setMountainDetails, colorGroup, className }: MountainContainerProps) => {

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
      {isMounted && <MountainBackground colorGroup={colorGroup} setMountainDetails={setMountainDetails} />}
    </div>
  );
};

export default MountainContainer;

