import { useState, useMemo, useEffect } from 'react';
import AppContext from '../context/AppContext';

export default function AppProvider({ children }) {
  const [isEdit, setIsEdit] = useState(false);
  const [blocks, setBlocks] = useState([]);
  const [selectedBlock, setSelectedBlock] = useState({});
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const storedBlocks = localStorage.getItem('blocks');
    if (storedBlocks) {
      setBlocks(JSON.parse(storedBlocks));
    }
  }, []);

  useEffect(() => {
    if (blocks.length > 0) {
      localStorage.setItem('blocks', JSON.stringify(blocks));
    }
  }, [blocks]);

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
