import { useState, useMemo, useEffect } from 'react';
import AppContext from '../context/AppContext';

export default function AppProvider({ children }) {
  const [isEdit, setIsEdit] = useState(false);
  const [blocks, setBlocks] = useState([]);
  const [selectedBlock, setSelectedBlock] = useState({});
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [blocksData, setBlocksData] = useState([]);

  useEffect(() => {
    const storedBlocks = localStorage.getItem('blocks');
    if (storedBlocks) {
      setBlocks(JSON.parse(storedBlocks));
    }
  }, []);

  useEffect(() => {
    const storedBlocksData = localStorage.getItem('blocksData');
    if (storedBlocksData) {
      setBlocksData(JSON.parse(storedBlocksData));
    }
  }, []);

  useEffect(() => {
    if (blocks.length > 0) {
      localStorage.setItem('blocks', JSON.stringify(blocks));
    }
    if (blocksData.length > 0) {
      localStorage.setItem('blocksData', JSON.stringify(blocksData));
    }
  }, [blocks, blocksData]);

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
      blocksData,
      setBlocksData,
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
      blocksData,
      setBlocksData
    ]
  );

  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  );
}
