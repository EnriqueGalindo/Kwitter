import React, { Component } from "react";
import { connect } from "react-redux";
import { getMessages } from "../actions";
import { postMessage } from "../actions";
import { likeMessage } from "../actions";
import { deleteMessage } from "../actions";
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
    console.log(this.props.messages);
    return (
      <>
        <section>
          <div>
            <div className="section">
              <div className="container">
                <h1 className="title is-1 has-text-centered">
                  {" "}
                  Message Board{" "}
                </h1>
              </div>
            </div>
            <textarea onChange={this.handleChange}>

            </textarea>
            <button onClick={() => this.props.postMessage(this.state.message)}>submit</button>
            {this.props.messages.map(message => {
              const userDeletable = message.username === this.propsusername;
              return (
                <React.Fragment key={message.id}>
                  <div className="section">
                    <div className="container">
                      <div className="message is-primary">
                        <div
                          id="message"
                          className="message-header is-clearfix"
                        >
                          {" "}
                          <img
                            id="defaultImg"
                            src="https://imgix.ranker.com/user_node_img/50088/1001747365/original/protect-from-daddy-and-_39_s-scary-face-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces"
                            alt="Bulma as default"
                          />
                          <h1 id="messageUsernames">{message.username} </h1>
                        </div>

                        <div id="message" className="message-body">
                          {message.text}
                        </div>
                        <button className="button" id="likeButton">
                          {console.log(message.id)}
                          <div id="like">
                            Like
                            {message.likes.map(like => {
                              onclick = this.props.likeMessage(message.id);

                              return <p key={like.id}>Liked by: {like.id}</p>;
                            })}
                            {userDeletable && (
                              <button onClick={event => this.props.deleteMessage(message.id)}>
                                Delete
                            </button>
                            )}
                            })
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <br />
                </React.Fragment>
              );
            })}
          </div>
        </section>
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
  likeMessage
};

export default connect(
  state => {
    return {
      username: state.auth.login.username
    };
  },
  {deleteMessage},
  mapStateToProps,
  //{ getMessages }
  mapDispatchToProps
)(MessageBoard);
