import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage.js";
import Blog from "./Pages/Blog/Blog.js";
import About from "./Pages/About/About.js";
import Contact from "./Pages/Contact/Contact.js";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&family=Open+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
