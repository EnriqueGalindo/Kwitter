import React, { Component } from "react";
import { connect } from "react-redux";
import { registerThenGoToHomepage } from "../actions/users";
import Spinner from "react-spinkit";
import { Form, Button, Row } from "react-bootstrap";

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
    this.props.registerThenGoToHomepage(this.state);
  };

  render() {
    const { isLoading, err } = this.props;
    return (
      <>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <Form className="registerForm" onSubmit={this.handleSubmit} style={{ width: "500px" }}>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Tell us your name!"
              name="displayName"
              onChange={this.handleChange}
              autoFocus
              required
            />
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Username
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Create your username"
              name="username"
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Create your password"
              name="password"
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Button variant="info" type="submit" disabled={isLoading}>
            Submit
          </Button>
        </Form>
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

export default connect(
  mapStateToProps,
  { registerThenGoToHomepage }
)(RegisterUser);
