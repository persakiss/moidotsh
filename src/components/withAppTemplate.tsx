//withAppTemplate.tsx
import React, { useState, useEffect } from 'react';
import { X } from 'react-feather';
import { useVisibilityStore } from '@/stores/visibilityStore';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import { NextRouter } from 'next/router';

type Props = {
  getDynamicTitle?: (router: NextRouter) => JSX.Element;
  router?: NextRouter;
};

const withAppTemplate = <P extends object>(WrappedComponent: React.FC<P>, appName: string, getDynamicTitle?: (router: NextRouter) => JSX.Element) => {
  const WrappedWithTemplate: React.FC<P & Props> = (props) => {
    const { getDynamicTitle, router, ...restProps } = props;
    const [localDynamicTitle, setLocalDynamicTitle] = useState<string | JSX.Element | null>(null);
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
      // Generate random x and y coordinates within the window's dimensions
      const randomX = Math.floor(Math.random() * (window.innerWidth - 200)); // 200 is the approx width of the app
      const randomY = Math.floor(Math.random() * (window.innerHeight - 200)); // 200 is the approx height of the app

      setCurrentPosition({ x: randomX, y: randomY });
    }, []); // Empty dependency array ensures this runs only once when the component mounts

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
      <Draggable handle=".drag-handle" position={currentPosition} onDrag={handleDrag}>
        <div className="relative top-2 right-10 z-[2000]">
          <div className="grid grid-cols-11 mt-2 absolute z-[2000] h-[2rem] w-[20rem] self-center bg-white rounded-t">
            <div className="col-span-10 drag-handle flex items-center">
              <p className="ml-3 cursor-default select-none">
                {getDynamicTitle && router ? getDynamicTitle(router) : localDynamicTitle || appName}
              </p>
            </div>
            <div className="col-span-1 my-auto flex items-center justify-center w-8 h-8 z-[2000]" onClick={toggleVisibility}>
              <X size={"1rem"} />
            </div>
          </div>
          <div className="p-3 absolute z-[2000] mt-[2rem] h-[7rem] w-[20rem] flex self-center bg-opacity-30 bg-white rounded-b">
            <WrappedComponent {...restProps as P} setDynamicTitle={setLocalDynamicTitle} />
          </div>
        </div>
      </Draggable>
    );
  }

  WrappedWithTemplate.displayName = `WithAppTemplate(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WrappedWithTemplate;
};

export default withAppTemplate;
