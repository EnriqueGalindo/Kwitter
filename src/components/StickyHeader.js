import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'
import {logoutThenGoToHomepage as logout} from "../actions";
import { connect } from "react-redux";

class StickyHeader extends Component {
    render(){
        return(
            <Navbar className="bg-dark justify-content-between" fixed="top">
          <Navbar.Brand>
            <img
              src="capsulecorp.png"
              alt="Capsule Corp"
              width="75"
              height="75"
            />
          </Navbar.Brand>
          <Link to={"/"+this.props.nav}>
          <Button
            variant="info"

            style={{ backgroundColor: "turquoise" }}
          >
            {this.props.nav}
          </Button>
          </Link>
          <Button variant="warning" onClick={this.props.logout}>
            Logout
          </Button>
        </Navbar>
        )
    }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(StickyHeader)

