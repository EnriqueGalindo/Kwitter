import React, { Component } from "react";
import { connect } from "react-redux";
import { getMessages } from "../actions";

class MessageBoard extends Component {
  componentDidMount() {
    this.props.getMessages();
  }

  render() {
    console.log(this.props.messages);
    return (
      <>
        <section>
          <div>
            <p>This is the MessageBoard</p>
            {this.props.messages.map(message => {
              return (
                <React.Fragment key={message.id}>
                  <article class="message is-primary">
                    <div class="message-header has-text-left-desktop">
                      {" "}
                      <img src="https://imgix.ranker.com/user_node_img/50088/1001747365/original/protect-from-daddy-and-_39_s-scary-face-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces" alt="img"/>
                      Username: {message.username}
                    </div>

                    <div class="message-body">Message Text: {message.text}</div>
                  </article>
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
  return {
    messages: state.messages.getMessages
  };
};

export default connect(
  mapStateToProps,
  { getMessages }
)(MessageBoard);
