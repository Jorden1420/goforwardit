import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Contact from "./components/Contact";

export default (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        {/* <Route component={Nomatch} /> */}
      </Switch>
    </div>
  </Router>
);
