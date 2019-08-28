import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import HomePage from './pages/homepage/homepage.component';


const HatsPages = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);


function App() {
  return (
    <div>
      {/* render the first one and notting else after it */}
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route  path='/hats/' component={HatsPages}></Route>
      </Switch>
    </div>
  );
}

export default App;
