import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import Second from './components/Second/Second'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/second' component={Second} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
