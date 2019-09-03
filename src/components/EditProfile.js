// import { Form, Button } from 'react-bootstrap';
import React, {Component} from "react";
import {Form, Button} from 'react-bootstrap';
import { editProfile } from "../actions/users";
import { connect } from "react-redux";
import {Link} from "react-router-dom";


class EditProfile extends Component {
   state = { displayName: this.props.displayName, about:this.props.about, password:"" };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

      handleSubmit = e => {
        e.preventDefault();
        this.props.editProfile(this.state);
      };

render () {
    return(
      <>
<Form
          className="editProfileUser"
          onSubmit={this.handleSubmit}
          style={{ width: "500px" }} 
        >
  <Form.Group controlId="displayName">
    <Form.Label>
      Change display name
    </Form.Label>
    <input type="text" 
    className="form-control" 
    name="displayName" 
    placeholder="Enter New Capsule Corp ID" 
    value={this.state.displayName}
    onChange={this.handleChange}
    />
    </Form.Group>
  <Form.Group controlId="about">
    <Form.Label>
      Update About 
      </Form.Label>
    <input type="about" 
    className="form-control" 
    name="about" 
    placeholder="Enter About" 
    value={this.state.about}
    onChange={this.handleChange}
    />
  </Form.Group>
  <Form.Group controlId="password">
    <Form.Label>
      Change Password
      </Form.Label>
    <input type="password" 
    class="form-control" 
    name="password" 
    placeholder="Enter New Password" 
    onChange={this.handleChange}
    />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit Change
  </Button>
</Form>
<Link to="/profile">
<Button variant="primary" >
    back to homepage
  </Button>
  </Link>
  </>
    )
}
}
const mapStateToProps = state => {
  return {
    user: state.users.getUser,
    username:state.auth.login.username,
    displayName: state.users.getUser.displayName,
    about: state.users.getUser.about
  };
}; 
export default connect(
  mapStateToProps,
  { editProfile }
)(EditProfile);