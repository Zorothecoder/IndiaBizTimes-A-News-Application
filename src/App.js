import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState("light");
  const [progress, setProgress] = useState(0);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(33,37,41)';
      document.querySelector('nav').style.borderBottom = '1px solid white';
      document.title = 'Textutils-Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.querySelector('nav').style.borderBottom = 'none';
      document.title = 'Textutils-Light Mode';
    }
  };

  return (
    <div>
      <Router>
        <NavBar title = "IndiaBizTimes" mode={mode} toggleMode={toggleMode}/>
        <LoadingBar heigth='3' color='#f11946' progress={progress} />
        <Routes>
          <Route path='/IndiaBizTimes-A-News-Application' element={<News setProgress={setProgress} key='general' mode={mode} country='in' category='general'/>}></Route>
          <Route path='/business' element={<News setProgress={setProgress} key='business' mode={mode} country='in' category='business'/>}></Route>
          <Route path='/entertainment' element={<News setProgress={setProgress} key='entertainment' mode={mode} country='in' category='entertainment'/>}></Route>
          <Route path='/science' element={<News setProgress={setProgress} key='science' mode={mode} country='in' category='science'/>}></Route>
          <Route path='/sports' element={<News setProgress={setProgress} key='sports' mode={mode} country='in' category='sports'/>}></Route>
          <Route path='/health' element={<News setProgress={setProgress} key='health' mode={mode} country='in' category='health'/>}></Route>
          <Route path='/technology' element={<News setProgress={setProgress} key='technology' mode={mode} country='in' category='technology'/>}></Route>
          <Route path='/world' element={<News setProgress={setProgress} key='world' mode={mode} country='in' category='world'/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}
export default App
