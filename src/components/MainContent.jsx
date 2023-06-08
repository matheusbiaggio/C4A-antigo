import React, { useContext } from 'react';
import EditIcon from '../images/edit.svg';
import { 
  Button,
  Circle,
  CircleContainer,
  ContainerBlocks,
  EditContainer,
  FooterHeader,
  HeaderContainer, Img, MainContainer, TitleHeader
} from '../style/MainContent';
import CardBlocks from './CardBlocks';
import AppContext from '../context/AppContext';

export default function MainContent() {
  const { isEdit, setIsEdit } = useContext(AppContext);

  return (
    <MainContainer>
      <HeaderContainer>
        <TitleHeader>Bloco 1</TitleHeader>
        <Button
          onClick={ () => setIsEdit(!isEdit)}
        >
          <Img src={ EditIcon } alt="EditIcon" />
        </Button>
      </HeaderContainer>
      <EditContainer>
        {isEdit && (
          <p>Modo de edição</p>
        )}
      </EditContainer>
      <ContainerBlocks>
        <CardBlocks />
      </ContainerBlocks>
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
