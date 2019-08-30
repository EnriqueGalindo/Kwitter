import React, { Component } from "react";
import { connect } from "react-redux";
import { loginThenGoToUserProfile as login } from "../actions";
import Spinner from "react-spinkit";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Image from "react-bootstrap/Image";

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
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe6ljFEdHvbwECDVJ4J5xjsX3Fn2RWkwdW_QnAYOKpdoBBzWzuVg"
          alt="Capsule Corp"
          style={{ width: 100, height: 100 }}
        />

        <Container>
          <br />
          <Col style={{ backgroundColor: "turquoise", borderRadius: "5px" }}>
            <Form onSubmit={this.handleLogin}>
              <Container>
                <Row>
                  <Col style={{ color: "white" }}>
                    <h1 className="text-center">Login</h1>
                  </Col>
                </Row>

                <Row>
                  <Col md={{ span: 6, offset: 3 }}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Control
                        type="text"
                        name="username"
                        autoFocus
                        required
                        onChange={this.handleChange}
                        placeholder="Enter Capsule Corp ID"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={{ span: 6, offset: 3 }}>
                    <Form.Control
                      type="password"
                      name="password"
                      required
                      onChange={this.handleChange}
                      placeholder="Enter Password"
                    />
                  </Col>
                </Row>
                <br />
                <ButtonToolbar
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <Row>
                    <Col>
                      <Button type="submit" disabled={isLoading}>
                        Login
                      </Button>

                      <Link to="/register">
                        <Button id="newProfile" disabled={isLoading}>
                          Create New Profile
                        </Button>
                        <br></br>
                      </Link>
                      {isLoading && <Spinner name="circle" color="blue" />}
                      {err && <p style={{ color: "red" }}>{err}</p>}
                      <br />
                    </Col>
                  </Row>
                </ButtonToolbar>
              </Container>
            </Form>
          </Col>
        </Container>
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
