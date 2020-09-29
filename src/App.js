import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Navbar from './Components/HOC/Navbar';
import Home from './Components/Components/Home';
import Works from './Components/Components/Works/Works';
import WorkGallery from './Components/Components/Works/WorkGallery';
import AboutUs from './Components/Components/AboutUs';

import './App.css';

function App() {
  const WorkGalleryWithNavbar = Navbar(WorkGallery);
  const WorksWithNavbar = Navbar(Works)
  return (
    <div className="appContainer">
      <Router>
        <Switch>
            <Route path="/aboutus">
              {Navbar(AboutUs)}
            </Route>
            <Route path="/works/pole-placement">
              <WorkGalleryWithNavbar name="Colocacion de poleas"/>
            </Route>
            <Route path="/works/street">
              <WorkGalleryWithNavbar name="Cruces de calle"/>
            </Route>
            <Route path="/works">
              <WorksWithNavbar displayDefaultGallery={true}/>
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
