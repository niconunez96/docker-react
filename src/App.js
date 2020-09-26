import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './Components/HOC/Navbar';
import Home from './Components/Components/Home';
import ProyectosActuales from './Components/Components/ProyectosActuales';
import TrabajosRealizados from './Components/Components/TrabajosRealizados';
import Nosotros from './Components/Components/Nosotros';

import './App.css';

function App() {
  return (
    <div className="appContainer">
      <Router>
        <Switch>
            <Route path="/nosotros">
              {Navbar(Nosotros)}
            </Route>
            <Route path="/trabajos">
              {Navbar(TrabajosRealizados)}
            </Route>
            <Route path="/proyectos-actuales">
              {Navbar(ProyectosActuales)}
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
