import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px 5px;
  width: 7vw;
  height: 100vh;
  border-right: 1px solid black;
  background-color: #e8eaf7;
`

export const LogoImg = styled.img`
  width: 40px;
  height: 40px;
`

export const IconsImg = styled.img`
  width: 30px;
  height: 30px;
`

export const IconsButton = styled.button`
  padding: 10px;
  border: none;
  background: none;
  cursor: pointer;
`

export const IconsLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 350px;
`

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 5px
`
