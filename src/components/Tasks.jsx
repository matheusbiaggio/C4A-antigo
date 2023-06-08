import React from 'react';
import AddIcon from '../images/add.svg';
import { 
  Button,
  HeaderContainer,
  Img,
  MainContainer,
  TitleHeader
} from '../style/Task';

export default function Tasks() {
  return (
    <MainContainer>
      <HeaderContainer>
        <TitleHeader>Tarefas</TitleHeader>
        <Button>
          <Img src={ AddIcon } alt="AddIcon" />
        </Button>
      </HeaderContainer>
      <main>

      </main>
    </MainContainer>
  )
}
