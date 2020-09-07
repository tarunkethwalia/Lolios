import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Firstpage from './components/firstpage/firstpage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Firstpage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
