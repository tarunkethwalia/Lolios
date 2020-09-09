import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Firstpage from './components/firstpage/firstpage'
import Second from './components/Second/Second'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Firstpage} />
          <Route path='/Second' component={Second} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
