import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { LoginForm, UserProfile, Menu } from ".";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route component={Menu} />
        <Switch>
          <Route exact path="/" render={() => <LoginForm />} />
          <Route exact path="/profile" render={() => <UserProfile />} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
