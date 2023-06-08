import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext from '../context/AppContext';
import { 
  BlockStyle, ContainerBlocks
} from '../style/MainContent';
import Draggable from 'react-draggable';

export default function Block() {
  const widthBloco = 80;
  const heightBloco = 40;
  const containerRef = useRef(null);
  const [parentWidth, setParentWidth] = useState(0);
  const [parentHeight, setParentHeight] = useState(0);
  const [divPositions, setDivPositions] = useState([]);

  const { 
    isEdit, blocks, setBlocks,
    setIsFormOpen, setSelectedBlock 
  } = useContext(AppContext);

  const handleDoubleClick = (block) => {
    if (isEdit === true) {
      setSelectedBlock(block);
      setIsFormOpen(true);
    }
  }

  const handleResize = () => {
    if (containerRef.current) {
      setParentWidth(containerRef.current.offsetWidth - widthBloco);
      setParentHeight(containerRef.current.offsetHeight - heightBloco);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDrag = (index, e, data, block) => {
    const updatedDivPositions = [...divPositions];
    updatedDivPositions[index] = { x: data.x, y: data.y };
    const updatedBlocks = [...blocks];
    updatedBlocks[index] = { ...block, x: data.x, y: data.y };
    setBlocks(updatedBlocks);
    setDivPositions(updatedDivPositions);
  };

  return (
    <ContainerBlocks ref={containerRef}>
      {
        blocks.length > 0 && (
          blocks.map((block, index) => 
          <Draggable 
            bounds={
              {
                left: 0,
                top: 0,
                right: parentWidth,
                bottom: parentHeight,
              }
            }
            position={divPositions[index]}
            onDrag={(e, data) => handleDrag(index, e, data, block)}
          >
            <BlockStyle
              key={index}
              onDoubleClick={ 
                () => handleDoubleClick(block)
              }
            >
              {block.name}
            </BlockStyle>
          </Draggable>
          )
        )
      }
    </ContainerBlocks>
  )
}
