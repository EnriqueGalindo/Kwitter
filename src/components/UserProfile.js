import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getUserProfile,
  uploadPictureThenGetLoggedInUser as uploadPicture,
  toggleLikeThenUpdateMessageById as toggleLike
} from "../actions";
import { domain } from "../actions/constants";
import defaultProfilePicture from "../default-profile.png";

class UserProfile extends Component {
  componentDidMount() {
    this.props.getUserProfile();
  }

  handleUploadPicture = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    this.props.uploadPicture(formData);
  };

  render() {
    const pictureSrc = this.props.user.pictureLocation
      ? domain + this.props.user.pictureLocation
      : defaultProfilePicture;
    return (
      <React.Fragment>
        <p>This is the user profile</p>
        <img src={pictureSrc} />
        <p>Username: {this.props.user.username}</p>
        <p>Display name: {this.props.user.displayName}</p>
        <p>About: {this.props.user.about}</p>
        <p>
          Account created: {new Date(this.props.user.createdAt).toDateString()}
        </p>
        <p>
          Last updated: {new Date(this.props.user.updatedAt).toDateString()}
        </p>
        <form onSubmit={this.handleUploadPicture}>
          <input type="file" name="picture" />
          <button type="submit">Upload new picture</button>
        </form>
        {this.props.messages.map(message => {
          return (
            <React.Fragment>
              <p>{message.username}</p>
              <p>{message.createdAt}</p>
              <p>{message.text}</p>
              <p>Number of likes: {message.likes.length}</p>
              <button onClick={event => this.props.toggleLike(message.id)}>
                Like/Unlike
              </button>
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.user || {},
    messages: state.messages.userMessages
  };
};

// this.props.uploadPicture
const mapDispatchToProps = {
  getUserProfile,
  uploadPicture,
  toggleLike
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
