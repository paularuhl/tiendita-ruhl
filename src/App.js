import React from 'react';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <br/>
      <br/>
      <br/>
      <ItemListContainer greeting="✨Welcome to my curated Music Store✨"/>

    </div>
  );
}

export default App;
