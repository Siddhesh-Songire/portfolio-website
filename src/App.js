import './App.css';
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Exprience from './pages/Experience'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectsPage from './pages/Projects';
import ProjectDisplay from './pages/ProjectDisplay'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/projects' element = {<ProjectsPage/>} />
          <Route path='/projects/:id' element = {<ProjectDisplay/>} />
          <Route path='/experience' element = {<Exprience/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
