import styled from 'styled-components';

export const PopupContainer = styled.div`
  background-color: white;
  width: 600px;
  height: auto;
  padding: 10px;
  border-radius: 10px;
`

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h3`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 39px;
  letter-spacing: 0.05em;
  color: black;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 14px;
`

export const AddButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 0px;
  width: 100px;
  height: 40px;
  background: #226CE0;
  border: none;
  border-radius: 12px;
  cursor: pointer;
`

export const CancelButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 0px;
  width: 100px;
  height: 40px;
  background: #F25858;
  border: none;
  border-radius: 12px;
  cursor: pointer;
`

export const NameButton = styled.p`
  width: 69px;
  height: 14px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #FFFFFF
`;

export const FormContainer = styled.form`
  margin: 30px 5px 5px 5px;
  padding: 15px;
  border: 1px solid #9F9F9F;
  border-radius: 12px;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
`

export const Input = styled.input`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 10px;
  gap: 10px;
  height: 30px;
  background: #FFFFFF;
  mix-blend-mode: normal;
  border: 1px solid '#1E212B';
  border-radius: 6px;
  color: '#1E212B';
`

export const NameInput = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.05em;
  color: '#1E212B';
`

export const Select = styled.select`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px 0px 5px;
  gap: 10px;
  width: ${({ width }) => width};
  height: 30px;
  background: #FFFFFF;
  mix-blend-mode: normal;
  border: 1px solid #1E212B;
  border-radius: 6px;
`;

