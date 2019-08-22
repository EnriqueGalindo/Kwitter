import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { LoginForm, UserProfile } from ".";
import RegisterForm from "./RegisterForm";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/profile" component={UserProfile} />
        <Route exact path="/register" component={RegisterForm} />
      </Switch>
    );
  }
}

export default App;
