import React from 'react';
import './Navbar.scss';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Index from '../../pages/Index';
import Home from '../../pages/Home';
import Show from '../../pages/Show';

function Navbar() {
  return(
    <Router>
      <div>
        <nav>
          <ul className="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/index">Index</Link></li>
            <li><Link to="/show">Show</Link></li>
            <li><Link to="/show">Search</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/index" component={Index} />
          <Route path="/show" component={Show} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default Navbar;