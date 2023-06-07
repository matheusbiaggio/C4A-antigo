import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { 
  HeaderContainer, TimerHeader, TitleHeader
} from '../style/Header';

export default function Header() {
  const [currentTime, setCurrentTime] = useState(
    moment().format('DD/MM/YYYY HH:mm:ss')
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment().format('DD/MM/YYYY HH:mm:ss'));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <HeaderContainer>
      <TitleHeader>Central de Controle</TitleHeader>
      <TimerHeader>{currentTime}</TimerHeader>
    </HeaderContainer>
  )
}
