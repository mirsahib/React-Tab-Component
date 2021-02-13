import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function TabComponent({ components, links }) {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              {links.map((link) => {
                return (
                  <li>
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            {links.map((link) => {
              return <Route path={link.path}>{link.component}</Route>;
            })}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default TabComponent;
