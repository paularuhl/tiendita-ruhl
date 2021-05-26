import React from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <br/>
      <br/>
      <br/>
      <ItemListContainer greeting="✨Welcome to my curated Music Store✨"/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
