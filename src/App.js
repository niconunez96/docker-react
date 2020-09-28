import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './Components/HOC/Navbar';
import Home from './Components/Components/Home';
import Works from './Components/Components/Works';
import AboutUs from './Components/Components/AboutUs';

import './App.css';

function App() {
  return (
    <div className="appContainer">
      <Router>
        <Switch>
            <Route path="/aboutus">
              {Navbar(AboutUs)}
            </Route>
            <Route path="/works">
              {Navbar(Works)}
            </Route>
            <Route path="/">
              {Navbar(Home)}
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
