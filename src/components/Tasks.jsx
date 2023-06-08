import React, { useContext } from 'react';
import AddIcon from '../images/add.svg';
import { 
  Button,
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
      <main>

      </main>
    </MainContainer>
  )
}
