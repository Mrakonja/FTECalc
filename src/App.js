import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import FteCalculator from './screens/ftecalculator';
import FtecalculatorInput from './screens/ftecalculatorInput';
import FteChoose from './screens/ftechoose';
import FteSetup from './screens/ftesetup';
import Intro from './screens/intro';

function App() {
  return (

    <Router>
      <Switch>
          <Route exact path="/">
              <Intro />
          </Route>
          <Route path="/ftesetup">
              <FteSetup />
          </Route>
          <Route path="/ftechoose">
              <FteChoose />
          </Route>
          <Route path="/ftecalculatorinput">
              <FtecalculatorInput />
          </Route>
          <Route path="/FteCalculator">
              <FteCalculator />
          </Route>
        </Switch>
    </Router>

  );
}

export default App;
