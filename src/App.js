import React from 'react';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (

    <div className='App'>
    <BrowserRouter>
        <NavBar />
        <Home />
    </BrowserRouter>
    </div>
  );
}

export default App;
