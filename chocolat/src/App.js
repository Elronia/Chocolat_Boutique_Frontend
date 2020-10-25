import React, {Component} from 'react';
// import logo from './logo.svg';
// import '../styling/App.css';
import './App.css';
// import Cart from './Cart.js';
// import Home from './Home.js';
import NavBar from './NavBar';
import Search from './Search';
import LoginForm from './LoginForm.js';
import TreatList from './TreatList';
import './TreatList.css';

// import { Route, Switch, Link, NavLink } from 'react-router-dom';

class App extends Component {

  state = {
    // All treats in [{..., user: {...}}, {..., user: {...}}, ...] format
    treats: [],

    // Current logged in user
    user: {
      id: "",
      username: "",
      email: ""
    },

    // Current logged in user's token
    token: "",

    // For infinite scroll
  };
  
  // Accessing an array of treats from the backend
  componentDidMount() {
    fetch('http://localhost:3000/treats')
      .then(resp => resp.json())
      .then((treatsArr) => {
        this.setState({
          treats: treatsArr
        })
      })
  }

  // Search Feature 
  changeSearchTerm = (theSearchedInput) => {
    this.setState({
      searchTerm: theSearchedInput
    })
  }

  // Handles the response of fetch to backend that sends back a result in the form of a { user: {}, token: "..."} object; if we get back an error object in the form of {error: ...}, then alert the user and return false, if not, set this.state.user to the user that we get back, and set this.state.token to the token we get back, then return true
  handleResponse = (result) => {
    if (result.error) {
      alert(result.error);
      return false;
    } else {
      this.setUser(result);
      localStorage.token = result.token;
      return true;
    }
  };

  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        {/* NAV BAR */}
        <NavBar
          searchTerm={this.state.searchTerm}
          changeSearchTerm={this.changeSearchTerm}
          // loggedIn={loggedIn}
          // handleLogOut={this.handleLogOut}
          // username={this.state.user.username}
        />
        {/* SEARCH */}
        
        {/* <LoginForm handleResponse={this.}/> */}
        
        <TreatList treats={this.state.treats}/>
      </div>
    );
  }

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
