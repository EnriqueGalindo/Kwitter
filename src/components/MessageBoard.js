import React, { Component } from "react";
import { connect } from "react-redux";
import {
  postMessage,
  getMessages,
  likeMessage,
  logoutThenGoToHomepage as logout,
  deleteMessage,
  getUsername,
  removeLike
} from "../actions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

class MessageBoard extends Component {
  state = { message: "" };
  componentDidMount() {
    this.props.getMessages();
    this.props.getUsername();
  }
  handleChange = event => {
    this.setState({ message: event.target.value });
  };
  render() {
    return (
      <>
        {/*navbar component*/}
        {/* <StickyHeader nav="profile"/> */}
        <br />
        <br />
        <br />
        <br />
        <br />
        {/*messages*/}
        <Container>
          <Row>
            <Col>
              {" "}
              <h1 className="text-center"> Message Board</h1>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <Container></Container>
        <Container style={{ width: "500px" }} onChange={this.handleChange}>
          <Form.Control placeholder="Capsulize your thoughts!" />
          <Button onClick={() => this.props.postMessage(this.state.message)}>
            Capsulize!
          </Button>
        </Container>
        <br />
        <br />
        <Container>
          <Row>
            <Col md={2} style={{ backgroundColor: "turquoise" }}>
              <p style={{ color: "darkblue" }}>Users:</p>
              {this.props.usernames &&
                this.props.usernames.users &&
                this.props.usernames.users.map(user => {
                  return (
                    <React.Fragment key={user.id}>
                      <Container
                        style={{
                          borderRadius: "50px"
                        }}
                      >
                        <Row>
                          <Col style={{ borderRadius: "5px" }} />
                          <Col>
                            <p style={{ fontSize: "12px" }}>{user.username}</p>
                          </Col>
                        </Row>
                      </Container>
                    </React.Fragment>
                  );
                })}
            </Col>

            <Col>
              {this.props.messages.map(message => {
                const userDeletable = message.username === this.props.username;
                const like = message.likes.find(like => like.username === this.props.username);
                return (
                  <React.Fragment key={message.id}>
                    <Container
                      style={{
                        borderRadius: "50px"
                      }}
                    >
                      <Row style={{ backgroundColor: "turquoise" }}>
                        <Col style={{ borderRadius: "5px" }} />
                        <Col>
                          <h3 className="text-center">{message.username}</h3>
                        </Col>
                      </Row>

                      <Row style={{ backgroundColor: "#faffff" }}>
                        <Col>
                          {" "}
                          <h3 className="text-center">{message.text}</h3>
                        </Col>
                      </Row>

                      <Row style={{ backgroundColor: "#faffff" }}>
                        <Col />
                      </Row>
                    </Container>
                    {message.likes.length} <img src="https://cdn140.picsart.com/286693443014211.png?r1024x1024" alt="cap" width="25px"></img>
                    <Button
                      onClick={() => {
                        if (like){
                          this.props.removeLike(like.id)
                        }
                        else {
                          this.props.likeMessage(message.id)
                        }}}
                      size="sm"
                      style={{
                        color: "black",
                        backgroundColor: "white",
                        borderRadius: "7px",
                        border: like ? " turquoise 2px solid": "grey 1px solid",
                      }}
                    >
                      Cap
                    </Button>
                    
                    
                    {userDeletable && (
                      <Button
                        onClick={() => this.props.deleteMessage(message.id)}
                        size="sm"
                      style={{
                        color: "black",
                        backgroundColor: "white",
                        borderColor: "grey",
                        borderRadius: "10px"
                      }}
                      >
                        Delete
                      </Button>
                    )}
                  </React.Fragment>
                );
              })}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     messages: state.messages.getMessages,
//     user: state.users.getUser
//   };
// };

// const mapDispatchToProps = {
//   getMessages,
//   postMessage,
//   likeMessage,
//   logout
// };

const mapDispatchToProps = dispatch => {
  return {
    removeLike: (likeId) => dispatch(removeLike(likeId)),
    getMessages: () => dispatch(getMessages()),
    postMessage: text => dispatch(postMessage({ text })),
    likeMessage: id => dispatch(likeMessage(id)),
    deleteMessage: id => dispatch(deleteMessage(id)),
    getUsername: () => dispatch(getUsername()),
    logout: () => dispatch(logout())
  };
};

export default connect(
  state => {
    return {
      user: state.users.getUser,
      messages: state.messages.getMessages,
      username: state.auth.login.username,
      usernames: state.users.getUsername
    };
  },
  mapDispatchToProps
)(MessageBoard);
