import React, { Component } from "react";
import { connect } from "react-redux";
import {postMessage} from "../actions"
import { getMessages, likeMessage } from "../actions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class MessageBoard extends Component {
  state = {message: ""}
  componentDidMount() {
    this.props.getMessages();
    //this.props.likeMessage();
  }
handleChange = (event) => {
  this.setState({message: event.target.value})
}
  render() {
    console.log(this.props.messages);
    return (
      <>
        <Container>
          <Row>
            <Col>
              {" "}
              <h1 className="text-center"> Message Board</h1>
            </Col>
          </Row>
        </Container>
        <br></br>
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
                      <Col style={{ borderRadius: "5px" }}>
                        <img
                          id="defaultImg"
                          src="https://imgix.ranker.com/user_node_img/50088/1001747365/original/protect-from-daddy-and-_39_s-scary-face-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces"
                          alt="Bulma as default"
                        />
                      </Col>
                      <Col>
                        <h3 className="text-center">{message.username} </h3>
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
  console.log(state);
  return {
    messages: state.messages.getMessages
  };
};

const mapDispatchToProps = {
  getMessages,
  postMessage,
  //likeMessage
  likeMessage
};

export default connect(
  mapStateToProps,
  //{ getMessages }
  mapDispatchToProps
)(MessageBoard);
