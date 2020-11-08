import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Navbar from './Components/HOC/Navbar';
import Home from './Components/Components/Home/Home';
import Works from './Components/Components/Works/Works';
import WorkGallery from './Components/Components/Works/WorkGallery';
import AboutUs from './Components/Components/AboutUs';

import { WIRE_PIPES, STREET, CHAMBERS } from './Components/Constants/Works'

import './App.css';

function App() {
  const WorksWithNavbar = Navbar(Works)
  return (
    <div className="appContainer">
      <Router>
        <Switch>
            <Route path="/aboutus">
              {Navbar(AboutUs)}
            </Route>
            <Route path="/works/pipes-wire">
              <WorksWithNavbar>
                <WorkGallery name="Colocación de cables y tuberias" works={WIRE_PIPES}/>
              </WorksWithNavbar>
            </Route>
            <Route path="/works/street">
              <WorksWithNavbar>
                <WorkGallery name="Cruces de calle" works={STREET}/>
              </WorksWithNavbar>
            </Route>
            <Route path="/works/chambers">
              <WorksWithNavbar>
                <WorkGallery name="Cámaras" works={CHAMBERS}/>
              </WorksWithNavbar>
            </Route>
            <Route path="/works">
              <WorksWithNavbar>
                <WorkGallery name="Galería" works={[...STREET, ...CHAMBERS, ...WIRE_PIPES]}/>
              </WorksWithNavbar>
            </Route>
            <Route path="/home">
              {Navbar(Home)}
            </Route>
            <Route path="/">
              <Redirect to="/home"></Redirect>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
