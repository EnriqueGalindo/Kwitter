import React, { Component } from "react";
import {
  Card,
  CardImage,
  Image,
  CardHeader,
  CardHeaderTitle,
  CardContent,
  Content,
  CardFooter,
  CardFooterItem
} from "re-bulma";
import { connect } from "react-redux";
import { getLoggedInUserProfileInfo } from "../actions/users";

class UserProfile extends Component {
  componentDidMount() {
    this.props.getLoggedInUserProfileInfo();
  }

  render() {
    return (
      <>
        <Card>
          <CardImage>
            <Image src={this.props.user.pictureLocation} />
          </CardImage>
          <CardHeader>
            <CardHeaderTitle>{this.props.user.displayName}</CardHeaderTitle>
          </CardHeader>
          <CardContent>
            <Content>{this.props.user.username}</Content>
            <Content>
              About:
              {this.props.user.about}
            </Content>
          </CardContent>
          <CardFooter>
            <CardFooterItem>Edit</CardFooterItem>
            <CardFooterItem>Delete</CardFooterItem>
          </CardFooter>
        </Card>
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
  { getLoggedInUserProfileInfo }
)(UserProfile);
