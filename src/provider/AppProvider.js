import { useState, useMemo } from 'react';
import AppContext from '../context/AppContext';

export default function AppProvider({ children }) {
  const [isEdit, setIsEdit] = useState(false);
  const [blocks, setBlocks] = useState([]);

  const context = useMemo(() => ({
    isEdit, setIsEdit,
    blocks, setBlocks,
  }),[
    isEdit, setIsEdit,
    blocks, setBlocks,
  ])

  return (
    <AppContext.Provider value={ context }>
      { children }
    </AppContext.Provider>
  )
}