// AppContainer.tsx
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { useState } from "react";

type AppContainerProps = {
  initialPosition?: { x: number, y: number };
  children: any; // Temporary until I figure out how to make this
  // Add more props like width, max-width, etc.
};

const AppContainer: React.FC<AppContainerProps> = ({ children, initialPosition }) => {
  const [currentPosition, setCurrentPosition] = useState(initialPosition || { x: 0, y: 0 });

  const handleDrag = (e: DraggableEvent, data: DraggableData) => {
    setCurrentPosition({ x: data.x, y: data.y });
  };

  return (
    <Draggable position={currentPosition} onDrag={handleDrag}>
      <div /* styles here */>
        {children}
      </div>
    </Draggable>
  );
};

export default AppContainer;

