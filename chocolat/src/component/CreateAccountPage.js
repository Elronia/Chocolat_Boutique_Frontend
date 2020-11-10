import React from 'react';
import CreateAccountForm from './CreateAccountForm';

class CreateAccountPage extends React.Component {
    state = {
        username: '',
        password: '',
        passwordConfirm: '',
        first_name: '',
        last_name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        email: '',
        phone: ''
      };

    // For form control, set the state for appropriate key/value on each change detected
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    // Upon submission of the form, create a newUser object, which has all info from this.state (except passwordConfirm, which would be redundant)
    handleSubmit = (e) => {
        e.preventDefault();

    // let newUser = {};
    // for (const attr in this.state) {
    //   if (attr !== "passwordConfirm") newUser[attr] = this.state[attr];
     }

    render() {
        return (
          <>
            <CreateAccountForm
              user={this.state}
              handleSubmit={this.handleSubmit}
              handleInput={this.handleInput}
            />
            {/* <BackButton /> */}
          </>
        );
      }
    

}

export default CreateAccountPage;