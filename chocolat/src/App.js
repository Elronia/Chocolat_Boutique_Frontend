import React, {Component} from 'react';
import logo from './logo.svg';
// import './App.css';
// import Cart from './Cart.js';
// import Home from './Home.js';
import NavBar from './NavBar';
import Search from './Search';
import LoginForm from './LoginForm.js';
import TreatList from './TreatList';

// import { Route, Switch, Link, NavLink } from 'react-router-dom';

class App extends Component {

  state = {
    treats: [],
    searchTerm: "",
    username: ""
  }

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


  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        {/* NAV BAR */}
        <NavBar
          // loggedIn={loggedIn}
          // handleLogOut={this.handleLogOut}
          // username={this.state.user.username}
        />
        {/* SEARCH */}
        <Search
          searchTerm={this.state.searchTerm}
          changeSearchTerm={this.changeSearchTerm} 
        />
        
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
