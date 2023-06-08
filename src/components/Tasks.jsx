import React, { useContext } from 'react';
import AddIcon from '../images/add.svg';
import { 
  BlockStyle,
  Button,
  ContainerBlocks,
  HeaderContainer,
  Img,
  MainContainer,
  TitleHeader
} from '../style/Task';
import AppContext from '../context/AppContext';

export default function Tasks() {
  const { 
    setIsEdit, blocks, setBlocks
  } = useContext(AppContext);

  const handleAddBlock = () => {
    setIsEdit(true);
    setBlocks([...blocks, {name: blocks.length}])
  }

  return (
    <MainContainer>
      <HeaderContainer>
        <TitleHeader>Tarefas</TitleHeader>
        <Button
          onClick={ handleAddBlock }
        >
          <Img src={ AddIcon } alt="AddIcon" />
        </Button>
      </HeaderContainer>
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
    </MainContainer>
  )
}
