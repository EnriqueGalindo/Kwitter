import React, { Component } from "react";
import { Input, Label, Button } from "re-bulma";
import { connect } from "react-redux";
import { registerThenGoToProfile } from "../actions/users";
import Spinner from "react-spinkit";

export class RegisterUser extends Component {
  state = {
    username: "",
    displayName: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.registerThenGoToProfile(this.state);
  };

  render() {
    const { isLoading, err } = this.props;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <Label>Name</Label>
          <Input
            type="text"
            placeholder="Tell us your name!"
            name="displayName"
            onChange={this.handleChange}
            autoFocus
            required
          />
          <Label>Username</Label>
          <Input
            type="text"
            placeholder="Create your username"
            name="username"
            onChange={this.handleChange}
            required
          />
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Create password"
            name="password"
            onChange={this.handleChange}
            required
          />
          <Button type="submit" disabled={isLoading}>
            Submit
          </Button>
        </form>
        {isLoading && <Spinner name="circle" color="blue" />}
        {err && <p style={{ color: "red" }}>{err}</p>}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.users.createProfileLoading,
    err: state.users.createProfileError
  };
};

const mapDispatchToProps = {
  registerThenGoToProfile
};

export default connect(
  mapDispatchToProps,
  mapStateToProps
)(RegisterUser);
