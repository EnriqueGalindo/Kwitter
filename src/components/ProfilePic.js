import React, { Component } from "react";
import { connect } from "react-redux";
import { getLoggedInUserProfileInfo } from "../actions/users";
import { domain } from "../actions/constants"
export class ProfilePic extends Component {
  componentDidMount() {
    this.props.getLoggedInUserProfileInfo();
  }

  render() {
    console.log(this.props);
    return (
      <img
        src={
          domain + this.props.user.pictureLocation
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
