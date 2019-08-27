import React, { Component } from "react";
import { connect } from "react-redux";
import { getMessages, likeMessage } from "../actions";

class MessageBoard extends Component {
  componentDidMount() {
    this.props.getMessages();
    //this.props.likeMessage();
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
            {this.props.messages.map(message => {
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

                        <button
                          className="button"
                          id="likeButton"
                          onClick={() => this.props.likeMessage(message.id)}
                        >
                          {console.log(message)}
                          <div id="like">
                            Like
                            {message.likes.map(like => {
                              return <p key={like.id}></p>;
                            })}
                          </div>
                        </button>
                        <div className="container">
                          <span class="icon has-text-danger">
                            <i class="fa fa-heart" />
                          </span>
                          {message.likes.length}
                        </div>
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
  likeMessage
};

export default connect(
  mapStateToProps,
  //{ getMessages }
  mapDispatchToProps
)(MessageBoard);
