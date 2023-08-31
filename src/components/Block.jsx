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
  const [selectedBlocks, setSelectedBlocks] = useState([]);

  const {
    isEdit,
    blocks,
    setBlocks,
    setIsFormOpen,
    setSelectedBlock,
    blocksData, setBlocksData
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
      const porcentX = (data.x * 100) / (containerRef.current.offsetWidth - 80);
      const porcentY = (data.y * 100) / (containerRef.current.offsetHeight - 40);
      updatedDivPositions[index] = {
        x: data.x,
        porcentX: porcentX,
        y: data.y,
        porcentY: porcentY,
      };
      setDivPositions(updatedDivPositions);

      const updatedBlocks = blocks.map((element, i) => {
        if (i === index) {
          return {
            ...element,
            x: data.x,
            porcentX: porcentX,
            y: data.y,
            porcentY: porcentY,
          };
        }
        return element;
      });

      setBlocks(updatedBlocks);
    } else {
      const { x, y } = previousPosition[index] || { x: 0, y: 0, porcentX: 0, porcentY: 0 };
      const updatedBlocks = [...blocks];
      updatedBlocks[index] = { ...block, x, y, porcentX: 0, porcentY: 0 };
      setBlocks(updatedBlocks);
    }
  };

  const calculateCenter = (x, y) => {
    return {
      x: x + widthBloco / 2,
      y: y + heightBloco / 2,
    };
  };

  const handleBlockClick = (block) => {
    if (selectedBlocks.length < 2) {
      setSelectedBlocks((prevSelected) => [...prevSelected, block]);
    } else {
      setSelectedBlocks([block]);
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

  useEffect(() => {
    const initialPositions = blocks.map((block) => ({
      x: block.x || 0,
      y: block.y || 0,
      porcentX: block.porcentX || ((100 * 79) / parentWidth),
      porcentY: block.porcentY || ((100 * 113) / parentHeight),
    }));
    setDivPositions(initialPositions);
    setPreviousPosition(initialPositions);
    blocksData.length === 0 && setBlocksData(blocks.map(() => ({ connections: [] })));
  }, [blocks, parentWidth, parentHeight]);

  useEffect(() => {
    if (selectedBlocks.length === 2) {
      const updatedBlocksData = [...blocksData];
      updatedBlocksData.forEach((blockData, index) => {
        if (selectedBlocks.includes(blocks[index])) {
          blockData.connections = [...new Set([...blockData.connections, ...selectedBlocks])];
        }
      });
      setBlocksData(updatedBlocksData);
      setSelectedBlocks([]);
    }
  }, [blocks, blocksData, selectedBlocks]);

  return (
    <ContainerBlocks ref={containerRef}>
      <svg style={{ position: 'absolute', width: 'calc(100% - 150px)', height: 'calc(100% - 200px)', pointerEvents: 'none' }}>
        {blocksData.map((blockData, index) =>
          blockData.connections.map((connectedBlock) => {
            const startPoint = calculateCenter(blocks[index].x, blocks[index].y);
            const endPoint = calculateCenter(connectedBlock.x, connectedBlock.y);
            return (
              <line
                key={`${index}-${connectedBlock.id}`}
                x1={startPoint.x}
                y1={startPoint.y}
                x2={endPoint.x}
                y2={endPoint.y}
                stroke="black"
              />
            );
          })
        )}
      </svg>

      {blocks.map((block, index) => (
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
                style={{
                  position: 'absolute',
                  left: `${(((block.porcentX * parentWidth) / 100) + 80) - block.x}px`,
                  top: `${(((block.porcentY * parentHeight) / 100) + 140) - block.y}px`,
                }}
                onClick={() => handleBlockClick(block)}
              >
                {block.name}
              </BlockStyle>
            </Draggable>
          ) : (
            <BlockStyle
              status={block.status}
              style={{
                position: 'absolute',
                left: `${((block.porcentX * parentWidth) / 100) + 80}px`,
                top: `${((block.porcentY * parentHeight) / 100) + 140}px`,
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
