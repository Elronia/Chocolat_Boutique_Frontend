import React from "react";
import '../styling/LoginForm.css';
import { withRouter } from "react-router-dom";
// import BackButton from "../component/BackButton";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
    // token: ""
  };

  // For form control, set the state for username/password on each change detected
  handleInput = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  

  // Make a post request to /login, sending the username and password from this.state; backend will take care of authenticating the user with the username and password inputted, making a token, and sending back a result in {user: {}, token: "..."} object format
  handleSubmit = (evt) => {
    evt.preventDefault();

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((response) => response.json())
      .then((result) => {
        // Once result comes back, we handle the result by setting this.state.user and this.state.token in App.js accordingly, as well as storing the token we got back in localStorage so as to avoid logging the user out with page refresh; after that we bring the user to /home (/treats)
        if (this.props.handleResponse(result)) {
          this.props.history.push("/home");
        }
        return true;
      });
  };

  render() {
    const { password, username } = this.state;

    return (
      <>
        <form className="ui form" id="log-in-form" onSubmit={this.handleSubmit}>
          <h4 className="ui dividing header">LOGIN</h4>
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={this.handleInput}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.handleInput}
            />
          </div>
          <button className="signin-button">
            Sign In
          </button>
          <div>
            <button className="ui button" type="submit">
              Create account
            </button>
          </div>
        </form>

        {/* <BackButton /> */}
      </>
    );
  }
}

export default withRouter(LoginForm);
