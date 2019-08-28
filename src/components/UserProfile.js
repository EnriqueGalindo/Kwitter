import React, { Component } from "react";
import { connect } from "react-redux";
import { getLoggedInUserProfileInfo } from "../actions/users";
import { logoutThenGoToHomepage as logout, expandImage } from "../actions";

class UserProfile extends Component {
  componentDidMount() {
    this.props.getLoggedInUserProfileInfo();
  }

  render() {
    return (
      <>
        <button onClick={this.props.logout}>Logout</button>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src={this.props.user.pictureLocation}
                alt="user face"
                onClick={() =>
                  this.props.expandImage(this.props.user.displayName)
                }
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              {this.props.user.displayName}
              <br />
            </div>
          </div>
        </div>
      </>
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
  { getLoggedInUserProfileInfo, logout, expandImage }
)(UserProfile);
