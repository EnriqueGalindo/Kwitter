import React, { Component } from "react";
import { connect } from "react-redux";
import { getLoggedInUserProfileInfo } from "../actions/users";
import { logoutThenGoToHomepage as logout } from "../actions";
import { Navbar, Button, Card } from "react-bootstrap";

class UserProfile extends Component {
  componentDidMount() {
    this.props.getLoggedInUserProfileInfo();
  }

  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        {/*navbar component*/}
        <header>
          <Navbar className="bg-dark justify-content-between" fixed="top">
            <Navbar.Brand>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe6ljFEdHvbwECDVJ4J5xjsX3Fn2RWkwdW_QnAYOKpdoBBzWzuVg"
                alt="Capsule Corp"
                width="75"
                height="75"
              />
            </Navbar.Brand>
            <Button variant="info" href="/messages">
              Message Board
            </Button>
            <Button variant="warning" onClick={this.props.logout}>
              Logout
            </Button>
          </Navbar>
        </header>
        {/*profile card component*/}
        <div className="profileCard">
          <Card bg="info" text="white" style={{ width: "500px" }}>
            <Card.Header>
              <Card.Title>{this.props.user.displayName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {this.props.user.username}
              </Card.Subtitle>
            </Card.Header>
            <Card.Img variant="top" src={this.props.user.pictureId} />
            <Card.Body>
              <Card.Title>About:</Card.Title>
              <Card.Text>
                {this.props.user.about}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="warning">Edit</Button>
              <Button variant="danger">Delete</Button>
            </Card.Footer>
          </Card>
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
