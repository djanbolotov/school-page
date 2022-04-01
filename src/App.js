import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Login from './pages/login/Login';
import Main from './pages/main/Main';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Main/>}/>
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
