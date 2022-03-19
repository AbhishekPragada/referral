import React from 'react';
import NavBar from './components/NavBar/navbar.js';
import MainPage from './components/MainPage/mainpage.js';
import './App.scss';

function App() {

  return (
    <div className="App">
      <NavBar />
      <MainPage />
      <div className="footer" />
    </div>
  );
}

export default App;
