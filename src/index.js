import React, { Component } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from "./routes";

ReactDOM.render(<div>{routes}</div>, document.getElementById("root"));
