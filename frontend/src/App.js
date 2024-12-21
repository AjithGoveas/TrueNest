import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Buying from './pages/Buying';
import Selling from './pages/Selling';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BackButtonHandler from './components/BackButtonHandler';
import './index.css';
import './App.css';

function App() {
  const [transitionDirection, setTransitionDirection] = useState("");
  return (
    <div className="App">
      <Router>
        <Header/>
        <BackButtonHandler setTransitionDirection={setTransitionDirection}/>
        <div className={'page-container ${transitionDirection}'}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/buying' element={<Buying/>} />
          <Route path='/selling' element={<Selling/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
