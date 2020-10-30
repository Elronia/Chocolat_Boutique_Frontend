import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
// import '../styling/App.css';
// import './App.css';
import AboutPage from './component/AboutPage';
import Home from './component/Home';
import NavBar from './component/NavBar';
import Search from './component/Search';
import LoginForm from './component/LoginForm';
import TreatList from './TreatList';
import './TreatList.css';
import TreatInfo from './component/TreatInfo';
import Cart from './component/Cart';
import CartPage from './component/CartPage';
import './component/NotFoundPage';


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
// console.log(theSearchedInput)
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

  addItemToCart = (id) => {
    // Find the item for this id in this.state.items
    const itemMatch = this.state.treats.filter((treat) => {
      return treat.id === id;
    });
    if (!itemMatch.length > 0) {
      return console.warn(`Item with id ${id} could not be found to add to cart.`);
    }
    const treat = itemMatch[0];
    // Check if it already exists in the cartArray
    const match = this.state.cartArray.filter((cartItem) => {
      return cartItem.treat.id === id;
    });
    if (match.length > 0) {
      // Item is already in cart! Increment quantity
      match[0].qty++;
      this.setState({ cartArray: [...this.state.cartArray] })
    } else {
      // Item is not in cart, add to cart.
      this.setState({ 
        cartArray: [...this.state.cartArray, { treat, qty: 1 }]})
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.cartArray !== this.state.cartArray){
      let total = this.state.cartArray.reduce((sum, product)=>
        sum + product.treat.price, 0 );

    this.setState({
      cartTotal: total
    })
    // console.log("prevState", prevState)
    // console.log("State",this.state)
    } 
  }

  removeItem = (treatObj) => {
    let updatedCart = this.state.cartArray.filter((treat) => {
      return treat !== treatObj 
    })
    this.setState({
      cartArray: updatedCart
    })
  }

  clearItems = () => {
    this.setState({
      cartArray: []
    });
  }


  render() {
    // console.log(this.props)
    let filteredTreats = this.state.treats.filter((treatObj) => {
      return treatObj.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })

    const cartActions = { addItemToCart: this.addItemToCart, deleteItemFromCart: this.deleteItemFromCart, calculateCartTotal: this.calculateCartTotal, addItemToCartDetail: this.addItemToCartDetail, clearItems: this.clearItems }
    
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
        <Switch>
          <Route path="/" exact component={Home}/>

          <Route path="/shop" exact render={() => <TreatList 
            treats={filteredTreats}/>} />

          {/* ITEM DETAIL */}
          <Route path="/treats/:id" render={routeProps => {
              return <TreatInfo match={routeProps.match}/>}} />

          <Route path="/about" exact render={() => <AboutPage/>}/>
          
          <Route path="/account" exact render={() => <LoginForm/>}/>

          

          <Route path="/cart" exact render={() => 
            <Cart cartArray={this.state.cartArray}
                  cartActions={cartActions}
                  removeItem={this.removeItem}
                  cartTotal={this.state.cartTotal} />} />

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
