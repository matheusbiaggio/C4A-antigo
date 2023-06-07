import React from 'react';
import Logo from '../images/Logo.svg';
import ExitIcon from '../images/Exit.svg';
import FunctionIcon from '../images/Function.svg';
import InfoIcon from '../images/Info.svg';
import MenuIcon from '../images/Menu.svg';
import ShieldIcon from '../images/Shield.svg';
import { NavbarContainer } from '../style/Navbar';

export default function Navbar() {
  return (
    <NavbarContainer>
      <div>
        <img src={ Logo } alt="Logo" />
        <div>
          <button>
            <img src={ FunctionIcon } alt="FunctionIcon" />
          </button>
          <button>
            <img src={ ShieldIcon } alt="ShieldIcon" />
          </button>
          <button>
            <img src={ InfoIcon } alt="InfoIcon" />
          </button>
          <button>
            <img src={ ExitIcon } alt="ExitIcon" />
          </button>
        </div>
      </div>
      <button>
        <img src={ MenuIcon } alt="MenuIcon" />
      </button>
    </NavbarContainer>
  )
}
