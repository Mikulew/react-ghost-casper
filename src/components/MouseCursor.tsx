import React, { useState, MouseEvent, ReactElement } from 'react';

export interface MouseState {
  x: number;
  y: number;
}

interface MouseProps {
  render(state: MouseState): ReactElement;
}

const DEFAULT_MOUSE_OPTIONS: MouseState = { x: 0, y: 0 };

const MouseCursor = ({ render }: MouseProps) => {
  const [mouse, setMouse] = useState<MouseState>(DEFAULT_MOUSE_OPTIONS);
  const handleMouseMove = (e: MouseEvent) => {
    setMouse({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div style={{ height: '100vh', width: '100vw' }} onMouseMove={handleMouseMove}>
      {render(mouse)}
    </div>
  );
};

export default MouseCursor;
