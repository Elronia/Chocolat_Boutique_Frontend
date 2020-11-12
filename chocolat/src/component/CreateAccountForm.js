import React from 'react';
import { withRouter} from 'react-router-dom';
import '../styling/CreateAccountForm.css';

class CreateAccountForm extends React.Component {
  state = {
      username: '',
      password: '',
      passwordConfirm: '',
      first_name: '',
      last_name: '',
      email: ''
    };
    
    // For form control, set the state for appropriate key/value on each change detected
    handleInput = (evt) => {
      this.setState({[evt.target.name]: evt.target.value });
    };

    handleSubmit = (evt) => {
      evt.preventDefault();
      fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
            "content-type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(resp => resp.json())
        .then((resp) => {
            console.log(resp)
            this.props.updateUser(resp.user);
            localStorage.token = resp.token;
            this.props.history.push("/");
            this.props.updateActiveMenuItem({}, {name: "home"});
        })
    }

    get isFormValid(){
      return (
          this.state.email && 
          this.state.first_name &&
          this.state.last_name &&
          this.state.username && 
          this.state.password && 
          this.state.passwordConfirm && 
          this.state.password === this.state.passwordConfirm
      )
    }

    render(){
      const { username, password, passwordConfirm, first_name, last_name, email } = this.state;
  
    return (
      <form
        className="ui form"
        id="register-or-edit-form"
        onChange={(evt) => this.handleInput(evt)}
        onSubmit={(evt) => this.handleSubmit(evt)}>

        <h2 className="ui dividing header">
          CREATE ACCOUNT
        </h2>

        <div className="field">
          <label>First Name</label>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={first_name}
            required
          />
        </div>
  
        <div className="field">
          <label>Last Name</label>
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={last_name}
            required
          />
        </div>
  
        <div className="field">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            required
          />
        </div>
  
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            required
          />
        </div>
  
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            required
          />
        </div>
        <div className="field">
          <label>Confirm Password</label>
          <input
            type="password"
            name="passwordConfirm"
            placeholder="Confirm Password"
            value={passwordConfirm}
            required
          />
        </div>
  
        <input type="Submit" value="Submit" className="ui submit button" disabled={!this.isFormValid}/>
      </form>
    );
  }
}

export default withRouter(CreateAccountForm);
  