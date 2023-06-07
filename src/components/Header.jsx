import React, { useEffect, useState } from 'react';
import moment from 'moment';

export default function Header() {
  const [currentTime, setCurrentTime] = useState(
    moment().format('DD-MM-YYYY HH:mm:ss')
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment().format('DD-MM-YYYY HH:mm:ss'));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>Central de Controle</h1>
      <p>{currentTime}</p>
    </div>
  )
}
