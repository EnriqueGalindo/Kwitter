import React, { Component } from "react";
import { connect } from "react-redux";
import { getLoggedInUserProfileInfo } from "../actions/users";
import { logoutThenGoToHomepage as logout } from "../actions";
import { Link } from "react-router-dom";

class UserProfile extends Component {
  componentDidMount() {
    this.props.getLoggedInUserProfileInfo();
  }

  render() {
    return (
      <>
        {/*navbar component*/}
        <header>
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe6ljFEdHvbwECDVJ4J5xjsX3Fn2RWkwdW_QnAYOKpdoBBzWzuVg"
                alt="Capsule Corp"
                width="100"
                height="300"
              />
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <div className="navbar-item">
                  <Link to="/messages">
                    <button
                      className="button is-medium is-primary is-rounded"
                      id="messageBoardButton"
                    >
                      Message Board
                    </button>
                  </Link>
                </div>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <button
                    className="button is-warning is-rounded is-medium"
                    onClick={this.props.logout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </header>
        {/*profile card component*/}
        <div className="container" id="cardContainer">
          <div className="card">
            <div className="card-image">
              <figure className="image is-5by4">
                <img src="#" alt="Placeholder image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-2">{this.props.user.displayName}</p>
                  <p className="subtitle is-6">{this.props.user.username}</p>
                </div>
              </div>

              <div className="content">
                <p className="subtitle is-4">About:</p>
                <br />
                <p>{this.props.user.about}</p>
              </div>
            </div>
            <footer className="card-footer">
              <a href="#" className="card-footer-item">
                Edit
              </a>
              <a href="#" className="card-footer-item">
                Delete
              </a>
            </footer>
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
  { getLoggedInUserProfileInfo, logout }
)(UserProfile);
