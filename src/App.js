import React, { useState, useEffect } from 'react';
import Nav from './Nav'
import MyPokemonList from './pages/MyPokemonList'
import WildPokemonList from './pages/WildPokemonList'
import WildPokemonDetail from './pages/WildPokemonDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/" component={WildPokemonList} />
          <Route path="/my-pokemon-list" component={MyPokemonList} />
          <Route path="/wild-pokemon-list" component={WildPokemonList} />
          <Route path="/wild-pokemon-detail/:id" component={WildPokemonDetail} />
        </Switch>
      </div>
    </Router>
  );
}
const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)
export default App;
