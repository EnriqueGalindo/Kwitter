import React, { Component } from "react";
import { connect } from "react-redux";
import { getLoggedInUserProfileInfo } from "../actions/users";
import {
  logoutThenGoToHomepage as logout,
  uploadUserPictureThenGetLoggedInUser as uploadPicture,
  viewImage,
  deleteUser
} from "../actions";
import {
  Navbar,
  Button,
  Card,
  Form,
  Container,
  ButtonToolbar
} from "react-bootstrap";

class UserProfile extends Component {
  componentDidMount() {
    this.props.getLoggedInUserProfileInfo();
  }

  handleUploadPicture = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.props.uploadPicture(formData);
  };

  handleDeleteUser = e => {
    if (window.confirm("Do you really want to do this?")) {
      this.props.deleteUser();
    }
  };

  render() {
    return (
      <>
        {/*navbar component*/}
        <Navbar className="bg-dark justify-content-between" fixed="top">
          <Navbar.Brand>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe6ljFEdHvbwECDVJ4J5xjsX3Fn2RWkwdW_QnAYOKpdoBBzWzuVg"
              alt="Capsule Corp"
              width="75"
              height="75"
            />
          </Navbar.Brand>
          <Button
            variant="info"
            href="/messages"
            style={{ backgroundColor: "turquoise" }}
          >
            Message Board
          </Button>
          <Button variant="warning" onClick={this.props.logout}>
            Logout
          </Button>
        </Navbar>
        {/*profile card component*/}
        <Container id="profileContainer">
          <Card bg="info" text="white" style={{ width: "500px" }}>
            <Card.Header style={{ backgroundColor: "turquoise" }}>
              <Card.Title>{this.props.user.displayName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {this.props.user.username}
              </Card.Subtitle>
            </Card.Header>
            <Card.Img
              style={{ backgroundColor: "turquoise" }}
              variant="top"
              src={
                "https://kwitter-api.herokuapp.com" +
                this.props.user.pictureLocation
              }
              onClick={this.props.viewImage}
            />
            <Card.Body style={{ backgroundColor: "turquoise" }}>
              <Card.Title>About:</Card.Title>
              <Card.Text>{this.props.user.about}</Card.Text>
            </Card.Body>
            <Card.Footer style={{ backgroundColor: "turquoise" }}>
              <ButtonToolbar
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <Button variant="warning">Edit</Button>
                <Button variant="danger" onClick={this.handleDeleteUser}>
                  Delete
                </Button>
              </ButtonToolbar>
            </Card.Footer>
          </Card>
        </Container>
        <Form onSubmit={this.handleUploadPicture}>
          <Form.Control name="picture" type="file" />
          <Button type="submit" style={{ backgroundColor: "turquoise" }}>
            Upload Picture
          </Button>
        </Form>
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
  { getLoggedInUserProfileInfo, logout, uploadPicture, viewImage, deleteUser }
)(UserProfile);
