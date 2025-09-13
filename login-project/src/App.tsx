import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import Home from './pages/home/home';
import Login from './pages/login/login';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
