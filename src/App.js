import './App.css';
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Projects from './pages/Projects'
import Exprience from './pages/Experience'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/projects' element = {<Projects/>} />
          <Route path='/experience' element = {<Exprience/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
