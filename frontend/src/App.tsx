import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css'
import NavbarTop from './components/NavbarTop/NavbarTop'
import SideNavbar from './components/NavbarSide/NavbarSide'
import SearchBar from './components/SearchBar/SearchBar';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavbarTop />
      <SideNavbar />
    </BrowserRouter>

  )
}

export default App;