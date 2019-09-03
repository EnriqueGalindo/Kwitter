import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { LoginForm, UserProfile, MessageBoard, StickyHeader, EditProfile } from ".";
import RegisterForm from "./RegisterForm";
import ProfilePic from "./ProfilePic";
import "bootstrap/dist/css/bootstrap.css";
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/profile" render={
          (props) => <React.Fragment>
            <StickyHeader {...props} nav={"messages"} />
            <UserProfile />
            </React.Fragment>
          } />
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/messages" render={
          (props) => <React.Fragment>
            <StickyHeader {...props} nav={"profile"} />
            <MessageBoard />
            </React.Fragment>
          } />
        <Route exact path="/profile/pic" component={ProfilePic} />
        <Route exact path="/editprofile" component={EditProfile} />
      </Switch>
    );
  }
}
export default App;

