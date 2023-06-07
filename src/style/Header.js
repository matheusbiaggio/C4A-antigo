import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100vw - 70px);
  height: 60px;
  background-color: #e8eaf7;
  padding: 10px;

  border-bottom: 1px solid #000000;
`

export const TitleHeader = styled.h3`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 29px;
  line-height: 35px;
  flex-grow: 1;
  text-align: center;

  letter-spacing: 0.065em;

  color: #000000;
`

export const TimerHeader = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 35px;
  margin-left: auto;

  letter-spacing: 0.065em;

  color: #000000;
`