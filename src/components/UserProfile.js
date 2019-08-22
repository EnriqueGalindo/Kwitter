import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutThenGoToHomepage as logout } from "../actions";

class UserProfile extends Component {
  render() {
    return <p>This is the user profile 
      <button onClick={this.props.logout}>Logout</button>
      </p>;
  }
}

export default connect(null, 
  { logout }
  )(UserProfile);

