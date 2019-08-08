import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.jsx';
import ShopPage from './pages/shop/shop.jsx';
import Header from './components/header/header.jsx';

import './App.css';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
