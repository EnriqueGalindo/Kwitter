import React, { Component } from "react";
import { connect } from "react-redux";
import { loginThenGoToUserProfile as login } from "../actions";
import Spinner from "react-spinkit";
import { Link } from "react-router-dom";

class LoginForm extends Component {
  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isLoading, err } = this.props;
    return (
      <>
        <figure class="image container is-128x128">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe6ljFEdHvbwECDVJ4J5xjsX3Fn2RWkwdW_QnAYOKpdoBBzWzuVg"
            alt="Capsule Corp"
          ></img>
        </figure>
        <div className="container" id="container1">
          <div className="section">
            <div className="container">
              <div className="message">
                <div className="container" id="innerContainer">
                  <h1 className="is-size-1 has-text-white has-text-centered">
                    Login
                  </h1>
                  <form onSubmit={this.handleLogin}>
                    <div className="field">
                      <input
                        type="text"
                        name="username"
                        autoFocus
                        required
                        onChange={this.handleChange}
                        placeholder="Enter Username"
                      />

                      <br></br>

                      <input
                        type="password"
                        name="password"
                        required
                        onChange={this.handleChange}
                        placeholder="Enter Password"
                      />

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="button is-large"
                        id="login"
                      >
                        Login
                      </button>

                      <Link to="/register">
                        <div className="is-centered">
                          <button
                            className="button is-large"
                            id="newProfile"
                            disabled={isLoading}
                          >
                            Create New Profile
                          </button>
                        </div>
                        <br></br>
                      </Link>
                      {isLoading && <Spinner name="circle" color="blue" />}
                      {err && <p style={{ color: "red" }}>{err}</p>}
                    </div>
                  </form>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect(
  ({ auth }) => ({
    isLoading: auth.loginLoading,
    err: auth.loginError
  }),
  { login }
)(LoginForm);
