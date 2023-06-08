import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { 
  BlockStyle, ContainerBlocks
} from '../style/MainContent';

export default function Block() {
  const { blocks } = useContext(AppContext);

  return (
    <ContainerBlocks>
      {
        blocks.length > 0 && (
          blocks.map((block, index) => 
          <BlockStyle key={index}>
            {block.name}
          </BlockStyle>
          )
        )
      }
    </ContainerBlocks>
  )
}
