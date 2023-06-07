import React from 'react';
import Logo from '../images/Logo.svg';
import ExitIcon from '../images/Exit.svg';
import FunctionIcon from '../images/Function.svg';
import InfoIcon from '../images/Info.svg';
import MenuIcon from '../images/Menu.svg';
import ShieldIcon from '../images/Shield.svg';
import { 
  IconsButton, IconsContainer, IconsImg, IconsLogoContainer, LogoImg,
  NavbarContainer
} from '../style/Navbar';

export default function Navbar() {
  return (
    <NavbarContainer>
      <IconsLogoContainer>
        <LogoImg src={ Logo } alt="Logo" />
        <IconsContainer>
          <IconsButton>
            <IconsImg src={ FunctionIcon } alt="FunctionIcon" />
          </IconsButton>
          <IconsButton>
            <IconsImg src={ ShieldIcon } alt="ShieldIcon" />
          </IconsButton>
          <IconsButton>
            <IconsImg src={ InfoIcon } alt="InfoIcon" />
          </IconsButton>
          <IconsButton>
            <IconsImg src={ ExitIcon } alt="ExitIcon" />
          </IconsButton>
        </IconsContainer>
      </IconsLogoContainer>
      <IconsButton>
        <IconsImg src={ MenuIcon } alt="MenuIcon" />
      </IconsButton>
    </NavbarContainer>
  )
}
