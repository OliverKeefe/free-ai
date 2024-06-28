import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css'
import NavbarTop from './components/NavbarTop/NavbarTop'
import SideNavbar from './components/NavbarSide/NavbarSide'
import SearchBar from './components/SearchBar/SearchBar';
import ChatBar from './components/ChatInput/ChatBar';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavbarTop />
      <SideNavbar />
      <ChatBar />
    </BrowserRouter>

  )
}

export default App;