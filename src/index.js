import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, Switch } from "react-router";

import indexRoutes from "routes/index.jsx";

import "assets/scss/material-kit-react.css";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  </Router>,
  document.getElementById("root")
);

registerServiceWorker();
