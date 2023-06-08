import React from 'react';
import EditIcon from '../images/edit.svg';
import { 
  Button,
  Circle,
  CircleContainer,
  FooterHeader,
  HeaderContainer, Img, MainContainer, TitleHeader
} from '../style/MainContent';

export default function MainContent() {
  return (
    <MainContainer>
      <HeaderContainer>
        <TitleHeader>Bloco 1</TitleHeader>
        <Button>
          <Img src={ EditIcon } alt="EditIcon" />
        </Button>
      </HeaderContainer>
      <main>

      </main>
      <FooterHeader>
        <CircleContainer>
          <Circle color="white" />
          <p>N/A</p>
        </CircleContainer>
        <CircleContainer>
          <Circle color="yellow" />
          <p>Fila</p>
        </CircleContainer>
        <CircleContainer>
          <Circle color="green" />
          <p>Liberado</p>
        </CircleContainer>
        <CircleContainer>
          <Circle color="red" />
          <p>Reprovado</p>
        </CircleContainer>
      </FooterHeader>
    </MainContainer>
  )
}
