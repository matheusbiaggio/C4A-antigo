import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { BlockStyle } from '../style/MainContent';

export default function Block() {
  const { blocks } = useContext(AppContext);

  return (
    <div>
      {
        blocks.length > 0 && (
          blocks.map((block, index) => 
          <BlockStyle key={index}>
            {block.name}
          </BlockStyle>
          )
        )
      }
    </div>
  )
}
