import React from 'react';
import imgSrc from '../ghost-casper.png';
import { MouseState } from './MouseCursor';

interface ICatProps {
  mouse: MouseState;
}

const GhostCasper = ({ mouse }: ICatProps) => {
  return <img src={imgSrc} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />;
};

export default GhostCasper;
