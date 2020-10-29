import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
// import '../styling/App.css';
import './App.css';
import AboutPage from './AboutPage';
import Home from './Home.js';
import NavBar from './NavBar';
import Search from './Search';
import LoginForm from './LoginForm';
import TreatList from './TreatList';
import './TreatList.css';
import TreatInfo from './TreatInfo'
// import Cart from './Cart.js';
// import CartPage from './CartPage';
// import './NotFoundPage';


class App extends Component {

  state = {
    // All treats in [{..., user: {...}}, {..., user: {...}}, ...] format
    treats: [],

    searchTerm: "",
    // Cart treats in [{ treat: treat, qty: }] format
    cartArray: [], 
    cartTotal: 0,
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


  // removeItem = (treatObj) => {
  //   let updatedCart = this.state.cartArray.filter((treat) => {
  //     return treat !== treatObj 
  //   })
  //   this.setState({
  //     cartArray: updatedCart
  //   })
  // }


  render() {
    // console.log(this.props)
    let filteredTreats = this.state.treats.filter((treatObj) => {
      return treatObj.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })

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
        {/* < Search 
          searchTerm={this.state.searchTerm}
          changeSearchTerm={this.changeSearchTerm}
        /> */}
        <Switch>
          <Route path="/" exact component={Home}/>

          <Route path="/shop" exact render={() => <TreatList 
            treats={this.state.treats}/>}
          />

          {/* ITEM DETAIL */}
          <Route path="/treats/:id" render={routeProps => {
              return <TreatInfo match={routeProps.match}/>}} 
          />

          <Route path="/about" exact render={() => <AboutPage/>}/>
          
          <Route path="/account" exact render={() => <LoginForm/>}/>

          

          {/* <Route path="/cart" exact render={() => <Cart
               cartArray={this.state.cartArray}
               cartActions={this.props.cartActions}
               removeItem={this.removeItem}
               cartTotal={this.state.cartTotal}/>}/> */}

          {/* Catch-all for if none of the routes above matches */}
          {/* <Route component={NotFoundPage}/> */}
        </Switch>
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
