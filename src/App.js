import React from "react";
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import AppProvider from "./provider/AppProvider";


function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
