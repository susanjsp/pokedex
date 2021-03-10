import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Index from '../pages/Index';
import Home from '../pages/Home';
import Show from '../pages/Show';

function Navbar() {
  return(
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/index">Index</Link>
            </li>
            <li>
              <Link to="/show">Show</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/index">
            <Index />
          </Route>
          <Route path="/show">
            <Show />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default Navbar;