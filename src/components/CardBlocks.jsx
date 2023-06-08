import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Block from './Block';

export default function CardBlocks() {
  const { isEdit } = useContext(AppContext);

  return (
    <div>
      <Block />
    </div>
  )
}
