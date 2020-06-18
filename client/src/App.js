import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//pages
import { home, login, signup } from "./pages";

//components
import { Navbar } from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">
            <Navbar />
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/login" component={login} />
              <Route exact path="/signup" component={signup} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
