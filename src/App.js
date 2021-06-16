import React from 'react';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter } from 'react-router-dom'
import CartContext from './Context/CartContext';

function App() {
  return (
    <div className='App'>
      <CartContext>
        <BrowserRouter>
          <NavBar />
          <Home />
        </BrowserRouter>
      </CartContext>
    </div>
  );
}

export default App;
