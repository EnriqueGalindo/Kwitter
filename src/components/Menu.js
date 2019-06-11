import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutThenGoToHomepage as logout } from "../actions";
import { Route } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>--MENU GOES HERE-- (current path: {this.props.path})</h1>
        <Route
          path="/profile"
          render={() => <button onClick={this.props.logout}>Logout</button>}
        />
        {/* {this.props.path === "/profile" && (
          <button onClick={this.props.logout}>Logout</button>
        )} */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    path: state.router.location.pathname
  };
};

const mapDispatchToProps = {
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
