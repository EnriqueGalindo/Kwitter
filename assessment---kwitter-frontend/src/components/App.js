import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { LoginForm, UserProfile, MessageBoard } from ".";
import "./App.sass";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <LoginForm />} />
        <Route exact path="/profile" render={() => <UserProfile />} />
        <Route exact path="/messages" render={() => <MessageBoard />} />
      </Switch>
    );
  }
}

export default App;
