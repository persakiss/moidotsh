//withAppTemplate.tsx
import React, { useState, useEffect } from 'react';
import { X } from 'react-feather';
import { useVisibilityStore } from '@/stores/visibilityStore';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';

const withAppTemplate = <P extends {}>(WrappedComponent: React.FC<P>, appName: string) => {
  const WrappedWithTemplate: React.FC<P> = (props) => {
    const toggleVisibility = useVisibilityStore((state) => {
      const toggleFuncName = `toggle${appName}`;
      return (state as any)[toggleFuncName];
    });

    // State to trak position
    const [currentPosition, setCurrentPosition] = useState<{
      x: number;
      y: number;
    }>({ x: 0, y: 0 });

     useEffect(() => {
      // Set initial position after mount to avoid "window is not defined" error
      setCurrentPosition({ x: window.innerWidth / 4, y: window.innerHeight / 4 });
    }, []);

    // Update the position state when dragging occurs.
    const handleDrag = (e: DraggableEvent, data: DraggableData) => {
      setCurrentPosition({ x: data.x, y: data.y });
    };

    const isVisible = useVisibilityStore((state) => {
      const visibilityName = `${appName.toLowerCase()}Visible`;
      return (state as any)[visibilityName];
    });

    if (!isVisible) return null;

    return (
      <Draggable position={currentPosition} onDrag={handleDrag}>
        <div className="relative top-1/4 left-1/4 z-[2000]"> {/* Debug style */}
          <div className="mt-2 absolute z-[2000] h-[2rem] w-[20rem] flex self-center bg-white rounded-t">
            <p className="ml-3 self-center flex-auto cursor-default select-none">{appName}</p>
            <p className="mr-3 my-auto " onClick={toggleVisibility}>
              <X size={"1rem"} />
            </p>
          </div>
          <div className="p-3 absolute z-[2000] mt-[2rem] h-[7rem] w-[20rem] flex self-center bg-opacity-30 bg-white rounded-b ">
            <WrappedComponent {...props} />
          </div>
        </div>
      </Draggable>
    );
  };

  WrappedWithTemplate.displayName = `WithAppTemplate(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WrappedWithTemplate;
};

export default withAppTemplate;
