import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getMessages,
  likeMessage,
  removeLike
} from "../actions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class MessageBoard extends Component {
  state = { showMine: true }
  componentDidMount() {
    this.props.getMessages();
  }

  handleSwitchLike = () => { this.setState({ showMine: false }) }
  handleSwitchMine = () => { this.setState({ showMine: true }) }
  filterLiked = (messages) => {
    return messages.filter(message => {
      return message.likes.some(like => {
        return like.username === this.props.username
      })
    })
  }
  messagesRender = message => {
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
            if (like) {
              this.props.removeLike(like.id)
            }
            else {
              this.props.likeMessage(message.id)
            }
          }}
          size="sm"
          style={{
            color: "black",
            backgroundColor: "white",
            borderRadius: "7px",
            border: like ? " turquoise 2px solid" : "grey 1px solid",
          }}
        >
          Cap
      </Button>
        )}
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.handleSwitchMine}
         style={{
          color: "black",
          backgroundColor: "white",
          borderRadius: "7px",
          border: "grey 1px solid",
        }}>
          My Capsules
      </Button>
        <Button onClick={this.handleSwitchLike}
         style={{
          color: "black",
          backgroundColor: "white",
          borderRadius: "7px",
          border:   "grey 1px solid",
        }}>
          Capped
      </Button>
        {this.state.showMine ? this.props.messages.map(this.messagesRender) :
           this.filterLiked(this.props.messages).map(this.messagesRender)}
      </React.Fragment>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    removeLike: (likeId) => dispatch(removeLike(likeId)),
    getMessages: () => dispatch(getMessages()),
    likeMessage: id => dispatch(likeMessage(id)),
  };
};

export default connect(
  state => {
    return {
      user: state.users.getUser,
      messages: state.messages.getMessages,
      username: state.auth.login.username,
    };
  },
  mapDispatchToProps
)(MessageBoard);
