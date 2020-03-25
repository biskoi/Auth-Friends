import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Login} from './components/Login';
import {Friends} from './components/Friends';
import {ProtectedRoute} from './utils/ProtectedRoute';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/' component = {Login}/>
        <ProtectedRoute path = '/friends' component = {Friends}/>
      </Switch>
    </div>
  );
}

export default App;

// TODO: 
//  be able to add friends
