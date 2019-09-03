import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { LoginForm, UserProfile, MessageBoard, EditProfile, StickyHeader} from ".";
import RegisterForm from "./RegisterForm";
import ProfilePic from "./ProfilePic";
import "bootstrap/dist/css/bootstrap.css";
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/profile" component={UserProfile} />
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/messages" component={MessageBoard} />
        <Route exact path="/profile/pic" component={ProfilePic} />
        <Route exact path="/editprofile" component={EditProfile} />
      </Switch>
    );
  }
}
export default App;
