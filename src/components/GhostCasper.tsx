import React, { useState, SyntheticEvent } from 'react';
import imgSrc from '../ghost-casper.png';
import { MouseState } from './MouseCursor';

interface ICatProps {
  mouse: MouseState;
}
interface ImageDeminstions {
  width: number;
  height: number;
}

const DEFAULT_DIMENSIONS: ImageDeminstions = { width: 0, height: 0 };

const GhostCasper = ({ mouse }: ICatProps) => {
  const [imgDimensions, setImgDimensions] = useState<ImageDeminstions>(DEFAULT_DIMENSIONS);
  const clientWidth = document.body.clientWidth;
  const clientHeight = document.body.clientHeight;
  const isWidthExceed = mouse.x + imgDimensions.width >= clientWidth;
  const isHeightExceed = mouse.y + imgDimensions.height >= clientHeight;
  const imageOnLoadHandler = (event: SyntheticEvent<HTMLImageElement>) => {
    const { width, height } = event.currentTarget;
    setImgDimensions({ width, height });
  };

  return (
    <img
      src={imgSrc}
      style={{
        position: 'absolute',
        left: isWidthExceed ? mouse.x - imgDimensions.width : mouse.x,
        top: isHeightExceed ? mouse.y - imgDimensions.height : mouse.y,
      }}
      onLoad={imageOnLoadHandler}
    />
  );
};

export default GhostCasper;
