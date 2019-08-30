import React, { Component } from "react";
import { connect } from "react-redux";
import { getLoggedInUserProfileInfo } from "../actions/users";
export class ProfilePic extends Component {
  componentDidMount() {
    this.props.getLoggedInUserProfileInfo();
  }

  render() {
    console.log(this.props);
    return (
      <img
        src={
          "https://kwitter-api.herokuapp.com" + this.props.user.pictureLocation
        }
        alt="User Face"
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.getUser
  };
};

export default connect(
  mapStateToProps,
  { getLoggedInUserProfileInfo }
)(ProfilePic);
