import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext from '../context/AppContext';
import { BlockStyle, ContainerBlocks } from '../style/MainContent';
import Draggable from 'react-draggable';

export default function Block() {
  const widthBloco = 80;
  const heightBloco = 40;
  const containerRef = useRef(null);
  const [parentWidth, setParentWidth] = useState(0);
  const [parentHeight, setParentHeight] = useState(0);
  const [divPositions, setDivPositions] = useState([]);
  const [previousPosition, setPreviousPosition] = useState([]);

  const {
    isEdit,
    blocks,
    setBlocks,
    setIsFormOpen,
    setSelectedBlock,
  } = useContext(AppContext);

  const handleDoubleClick = (block) => {
    if (isEdit === true) {
      setSelectedBlock(block);
      setIsFormOpen(true);
    }
  };

  const handleResize = () => {
    if (containerRef.current) {
      setParentWidth(containerRef.current.offsetWidth - widthBloco);
      setParentHeight(containerRef.current.offsetHeight - heightBloco);
    }
  };

  const handleDrag = (index, e, data, block) => {
    if (isEdit) {
      const updatedDivPositions = [...divPositions];
      updatedDivPositions[index] = { x: data.x, y: data.y };
      setDivPositions(updatedDivPositions);
  
      const updatedBlocks = blocks.map((element, i) => {
        if (i === index) {
          return { ...element, x: data.x, y: data.y };
        }
        return element;
      });
  
      setBlocks(updatedBlocks);
    } else {
      const { x, y } = previousPosition[index] || { x: 0, y: 0 };
      const updatedBlocks = [...blocks];
      updatedBlocks[index] = { ...block, x, y };
      setBlocks(updatedBlocks);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setPreviousPosition(divPositions);
  }, [divPositions]);

  return (
    <ContainerBlocks ref={containerRef}>
      {blocks.length > 0 &&
        blocks.map((block, index) => (
          <div key={index}>
            {isEdit ? (
              <Draggable
                bounds={{
                  left: 0,
                  top: 0,
                  right: parentWidth,
                  bottom: parentHeight,
                }}
                position={divPositions[index]}
                onDrag={(e, data) => handleDrag(index, e, data, block)}
              >
                <BlockStyle
                  status={block.status}
                  onDoubleClick={() => handleDoubleClick(block)}
                >
                  {block.name}
                </BlockStyle>
              </Draggable>
            ) : (
              <BlockStyle
                status={block.status}
                style={{
                  position: 'absolute',
                  left: `${previousPosition[index]?.x + 80}px`,
                  top: `${previousPosition[index]?.y + 140}px`,
                }}
              >
                {block.name}
              </BlockStyle>
            )}
          </div>
        ))}
    </ContainerBlocks>
  );
}
