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
  const [selectedBlock1, setSelectedBlock1] = useState(null);
  const [selectedBlock2, setSelectedBlock2] = useState(null);
  const [svgLines, setSvgLines] = useState([]);

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

  const handleBlockSelection = (block) => {
    if (!selectedBlock1) {
      setSelectedBlock1(block);
    } else if (!selectedBlock2 && block.id !== selectedBlock1.id) {
      console.log(svgLines);
      if (svgLines.length === 0 ) {
        setSelectedBlock2(block);
        renderSvgLines(selectedBlock1, block);
        setSelectedBlock1(null);
        setSelectedBlock2(null);
      } else {
        setSelectedBlock2(block);

        let indexRemove = null; 
        const verifyRepeat = svgLines.some((element, index) => {
          indexRemove = index;
          return (element.start === selectedBlock1 && element.end === block) || (selectedBlock1 === element.end && block === element.start)
        })
        if (!verifyRepeat) {
          renderSvgLines(selectedBlock1, block);
          setSelectedBlock1(null);
          setSelectedBlock2(null);
        } else {
          svgLines.splice(indexRemove, 1);
          setSelectedBlock1(null);
          setSelectedBlock2(null);
        }       
      }
    } else {
      setSelectedBlock1(block);
      setSelectedBlock2(null);
    }
  };

  const renderSvgLines = (block1, block2) => {
    if (block1 && block2) {
      const line = {
        start: block1,
        end: block2
      };
      setSvgLines([...svgLines, line]);
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

      svgLines.forEach((element) => {
        if (element.start.id === block.id) {
          element.start = block;
        } else if (element.end.id === block.id) {
          element.end = block
        }
      })

    } else {
      const { x, y } = previousPosition[index] || { x: 0, y: 0, porcentX: 0, porcentY: 0 };
      const updatedBlocks = [...blocks];
      updatedBlocks[index] = { ...block, x, y, porcentX: 0, porcentY: 0 };
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

  useEffect(() => {
    const initialPositions = blocks.map((block) => ({
      x: block.x || 0,
      y: block.y || 0,
      porcentX: block.porcentX || ((100 * 79) / parentWidth),
      porcentY: block.porcentY || ((100 * 113) / parentHeight),
    }));
    setDivPositions(initialPositions);
    setPreviousPosition(initialPositions);
  }, [blocks, parentWidth, parentHeight]);

  return (
    <ContainerBlocks ref={containerRef}>
      <svg
        width="94%"
        height="77%"
        style={{ position: 'absolute'}}
      >
        {svgLines && svgLines.map((line, index) => (
          <React.Fragment key={`line_${index}`}>
            <line
              x1={line.start.x + widthBloco / 2}
              y1={line.start.y + heightBloco / 2}
              x2={line.start.x + widthBloco / 2}
              y2={line.end.y + heightBloco / 2}
              stroke="blue"
              strokeWidth="2"
            />
            <line
              x1={line.start.x + widthBloco / 2}
              y1={line.end.y + heightBloco / 2}
              x2={line.end.x + widthBloco / 2}
              y2={line.end.y + heightBloco / 2}
              stroke="blue"
              strokeWidth="2"
            />
          </React.Fragment>
        ))}
      </svg>
      {blocks.map((block, index) => (
        <div key={block.id}>
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
                id={block.id}
                status={block.status}
                onDoubleClick={() => handleDoubleClick(block)}
                onClick={() => handleBlockSelection(block)}
                className={
                  (selectedBlock1 && selectedBlock1.id === block.id) ||
                  (selectedBlock2 && selectedBlock2.id === block.id)
                    ? "selected"
                    : ""
                }
                style={{
                  position: 'absolute',
                  left: `${(((block.porcentX * parentWidth) / 100) + 80) - block.x}px`,
                  top: `${(((block.porcentY * parentHeight) / 100) + 140) - block.y}px`,
                }}
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

