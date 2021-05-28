import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import AboutRuhl from '../AboutRuhl/AboutRuhl';
import './Home.scss';

const Home = ({ item }) => {
    return (
        <main>
        <Switch>
          <Route exact path='/'>
          <h1> Welcome to my curated Music Store </h1>
          <ItemListContainer />
          </Route>
          <Route exact path='/aboutArtists'>
          <ItemListContainer type={'bands'}/>
          </Route>
          <Route exact path='/item/:id'>
          <ItemDetailContainer />
          </Route>
          <Route exact path='/ruhl'>
          <AboutRuhl />
          </Route>
        </Switch>
        </main>
    );
}

export default Home;