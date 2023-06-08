import React, { useContext } from 'react';
import EditIcon from '../images/edit.svg';
import { 
  Button,
  Circle,
  CircleContainer,
  EditContainer,
  FooterHeader,
  HeaderContainer, Img, MainContainer, TitleHeader
} from '../style/MainContent';
import AppContext from '../context/AppContext';
import Block from './Block';

export default function MainContent() {
  const { 
    isEdit, setIsEdit
  } = useContext(AppContext);

  const handleChangeEdit = () => {
    setIsEdit(!isEdit);
  }

  return (
    <MainContainer>
      <HeaderContainer>
        <TitleHeader>Bloco 1</TitleHeader>
        <Button
          onClick={ handleChangeEdit}
        >
          <Img src={ EditIcon } alt="EditIcon" />
        </Button>
      </HeaderContainer>
      <EditContainer>
        {isEdit && (
          <p>Modo de edição</p>
        )}
      </EditContainer>
      <Block />
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
