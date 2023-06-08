import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`

export const MainContainer = styled.div`
  display: flex;
`

export const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`