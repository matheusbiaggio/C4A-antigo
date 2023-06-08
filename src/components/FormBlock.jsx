import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../context/AppContext';
import { 
  AddButton, ButtonsContainer, CancelButton, 
  FormContainer, HeaderContainer, Input, Label, NameButton, 
  NameInput, 
  PopupContainer, Select, Title 
} from '../style/Form';

export default function FormBlock() {
  const [inputValues, setInputValues] = useState({});

  const { 
    selectedBlock, blocks, setBlocks,
    setIsFormOpen, setSelectedBlock,
  } = useContext(AppContext);

  useEffect(() => {
    setInputValues({ name: selectedBlock.name || "" });
  }, [selectedBlock]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value
    }));
  };

  const handleConfirm = () => {
    const auxArray = blocks.map((element) => {
      if (element.id === selectedBlock.id) {
        return { ...element, ...inputValues };
      }
      return element;
    });
    setBlocks(auxArray);
    setIsFormOpen(false);
    setSelectedBlock({});
  };

  return (
    <PopupContainer>
      <HeaderContainer>
        <Title>
          {`Editando o bloco ${selectedBlock.name}`}
        </Title>
        <ButtonsContainer>
          <AddButton onClick={handleConfirm}>
            <NameButton>Confirmar</NameButton>
          </AddButton>
          <CancelButton onClick={() => {
            setIsFormOpen(false);
            setSelectedBlock({});
          }}>
            <NameButton>Cancelar</NameButton>
          </CancelButton>
        </ButtonsContainer>
      </HeaderContainer>
      <FormContainer>
        <Label htmlFor="name" width="300px">
          <NameInput>Nome</NameInput>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Insira"
            value={inputValues.name || ""}
            onChange={handleChange}
          />
        </Label>
        <Label
          htmlFor="status"
          width="300px"
          style={{ marginTop: '15px'}}
        >
          <NameInput>Estado</NameInput>
          <Select
            name="status"
            id="status"
            value={inputValues.status || ""}
            onChange={handleChange}
          >
            <option value="N/A">N/A</option>
            <option value="Fila">Fila</option>
            <option value="Liberado">Liberado</option>
            <option value="Reprovado">Reprovado</option>
          </Select>
        </Label>
      </FormContainer>
    </PopupContainer>
  );
}
