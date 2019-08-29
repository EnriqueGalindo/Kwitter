import React, { Component } from "react";
import { connect } from "react-redux";
import { postMessage, getMessages, likeMessage, logoutThenGoToHomepage as logout } from "../actions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";

class MessageBoard extends Component {
  state = { message: "" };
  componentDidMount() {
    this.props.getMessages();
    //this.props.likeMessage();
  }
  handleChange = event => {
    this.setState({ message: event.target.value });
  };
  render() {
    console.log(this.props.messages);
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
            href="/profile"
            style={{ backgroundColor: "turquoise" }}
          >
            Profile
          </Button>
          <Button variant="warning" onClick={this.props.logout}>
            Logout
          </Button>
        </Navbar>
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
        <Container>
          <Col style={{ paddingLeft: 100, paddingRight: 100 }}>
            {this.props.messages.map(message => {
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
                      <Col>
                        <Button
                          onClick={() => this.props.likeMessage(message.id)}
                          size="sm"
                          style={{
                            color: "black",
                            backgroundColor: "white",
                            borderColor: "grey"
                          }}
                        >
                          {console.log(message)}

                          {message.likes.map(like => {
                            return <p key={like.id}> Like</p>;
                          })}
                        </Button>

                        <span className="icon">
                          <i className="fa fa-heart" />
                        </span>
                        {message.likes.length}
                      </Col>
                    </Row>
                  </Container>
                  <br />
                </React.Fragment>
              );
            })}
          </Col>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages.getMessages,
    user: state.users.getUser
  };
};

const mapDispatchToProps = {
  getMessages,
  postMessage,
  //likeMessage
  likeMessage,
  logout
};

export default connect(
  mapStateToProps,
  //{ getMessages }
  mapDispatchToProps
)(MessageBoard);
