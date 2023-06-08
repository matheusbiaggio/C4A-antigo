import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100vw - 390px);
  height: calc(100vh - 80px);
  margin: 10px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.51);
  border-radius: 18px;

  background-color: #e8eaf7;
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  padding: 10px 20px;

  border-top-right-radius: 18px;
  border-top-left-radius: 18px;

  background-color: #29545A;
`

export const Img = styled.img`
  width: 20px;
  height: 20px;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background: none;
  cursor: pointer;
`

export const TitleHeader = styled.h3`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 29px;
  line-height: 35px;
  flex-grow: 1;
  text-align: center;

  letter-spacing: 0.065em;

  color: #FFFFFF;
`

export const FooterHeader = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  border-top: 1px black solid;
`

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => props.color};
`

export const CircleContainer = styled.div `
  display: flex;
  gap: 5px;
  padding: 15px;
`

export const EditContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;

  color: red;
`

export const ContainerBlocks = styled.div`
  flex-grow: 1;
`

export const BlockStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;

  width: 70px;
  height: 30px;
  margin: 5px;

  background-color: #29545A;
`
