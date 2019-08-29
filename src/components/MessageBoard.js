import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteMessage } from "../actions";
import {postMessage} from "../actions"
import { getMessages, likeMessage } from "../actions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class MessageBoard extends Component {
  state = { message: "" }
  componentDidMount() {
    this.props.getMessages();
    //this.props.likeMessage();
  }
  handleChange = (event) => {
    this.setState({ message: event.target.value })
  }
  render() {
    return (
        <section>
            
        <Container>
          <Row>
            <Col>
              {" "}
              <h1 className="text-center"> Message Board</h1>
            </Col>
          </Row>
        </Container>
        <textarea onChange={this.handleChange}>

            </textarea>
            <button onClick={() => this.props.postMessage(this.state.message)}>submit</button>
        <br></br>
        <Container>
          <Col style={{ paddingLeft: 100, paddingRight: 100 }}>
            {this.props.messages.map(message => {
              const userDeletable = message.username === this.props.username;
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
                      </Col>
                      </Row>
                      </Container>
                      <Button
                          onClick={() => this.props.likeMessage(message.id)}
                          size="sm"
                          style={{
                            color: "black",
                            backgroundColor: "white",
                            borderColor: "grey"
                          }}
                        >
                          Like
                        </Button>
                          {message.likes.map(like => <p key={like.id}>Liked by: {like.id}</p>)}
                          {userDeletable && (
                          <button onClick={() => this.props.deleteMessage(message.id)}>
                            Delete
                          </button>
                          )}

                            
                      </React.Fragment>
                      )
                       
                          
            })}
          </Col>
        </Container>
      </section>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    messages: state.messages.getMessages
  };
};

// const mapDispatchToProps = {
//   getMessages,
//   postMessage,
//   likeMessage,
//   deleteMessage
// };

const mapDispatchToProps = dispatch => {
  return {
    getMessages: () => dispatch(getMessages()),
    postMessage: (text) => dispatch(postMessage({text})),
    likeMessage: () => dispatch(likeMessage()),
    deleteMessage: (id) => dispatch(deleteMessage(id))
  }
}

export default connect(
  state => {
    return {
      username: state.auth.login.username,
      messages: state.messages.getMessages
    };
  },
  mapDispatchToProps
)(MessageBoard);
