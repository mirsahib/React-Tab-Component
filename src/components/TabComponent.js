import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function TabComponent({ links }) {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              {" "}
              {/**populating the links */}
              {links.map((link) => {
                return (
                  <li>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Populating the switch with routes */}
          <Switch>
            {links.length !== 0
              ? links.map((link) => {
                  return (
                    <Route exact path={link.path} component={link.component} />
                  );
                })
              : ""}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default TabComponent;
