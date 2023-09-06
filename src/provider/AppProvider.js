import { useState, useMemo } from 'react';
import AppContext from '../context/AppContext';

export default function AppProvider({ children }) {
  const [isEdit, setIsEdit] = useState(false);
  const [blocks, setBlocks] = useState([]);
  const [selectedBlock, setSelectedBlock] = useState({});
  const [isFormOpen, setIsFormOpen] = useState(false);

  const context = useMemo(
    () => ({
      isEdit,
      setIsEdit,
      blocks,
      setBlocks,
      selectedBlock,
      setSelectedBlock,
      isFormOpen,
      setIsFormOpen,
    }),
    [
      isEdit,
      setIsEdit,
      blocks,
      setBlocks,
      selectedBlock,
      setSelectedBlock,
      isFormOpen,
      setIsFormOpen,
    ]
  );

  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  );
}
