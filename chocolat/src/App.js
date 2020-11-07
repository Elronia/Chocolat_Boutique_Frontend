import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
// import '../styling/App.css';
import './App.css';
import NavBar from './component/NavBar';
import Home from './component/Home';
import HomeCarousel from './component/HomeCarousel';
import ShippingGuidelines from './component/ShippingGuidelines';
import AboutPage from './component/AboutPage';
import Search from './component/Search';
import LoginForm from './component/LoginForm';
import TreatList from './component/TreatList';
import TreatCard from './component/TreatCard';
import TreatInfo from './component/TreatInfo';
import CartPage from './component/CartPage';
import CartItem from './component/CartItem';
import CheckoutForm from './component/CheckoutForm';
import ShippingForm from './component/ShippingForm';
import PaymentForm from './component/PaymentForm';
import Footer from './component/Footer';
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
    token: ""

    // For infinite scroll
  };

  // Accessing an array of treats from the backend
  componentDidMount() {
    const savedStore = JSON.parse(localStorage.getItem('store') || "{}")
    this.setState(savedStore);
    fetch('http://localhost:3000/treats')
      .then(resp => resp.json())
      .then((treatsArr) => {
        this.setState({
          treats: treatsArr
        })
      })
  }

  saveStore(){
    localStorage.setItem('store', JSON.stringify(this.state));
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
    const { cartArray } = this.state;
    // Find the item for this id in this.state.items
    const treat = this.state.treats.find((treat) => {
      return treat.id === id;
    });
    if (!treat) {
      return console.warn(`Item with id ${id} could not be found to add to cart.`);
    }
    // Check if it already exists in the cartArray
    const foundTreatIndex = cartArray.findIndex((cartItem) => {
      return cartItem.treat.id === id;
    });
    // console.log(match)
    if (foundTreatIndex !== -1) {
      this.increaseItem(foundTreatIndex)
    } else {
      // Item is not in cart, add to cart.
      this.setState({ 
        cartArray: [...cartArray, { treat, qty: 1 }]})
        this.saveStore();
    }
  }

  increaseItem = (i) => {
    const { cartArray } = this.state;
    cartArray[i].qty++; 
    this.setState({ cartArray: [...cartArray] })
    this.saveStore();
  }

  decreaseItem = (i) => {
    const { cartArray } = this.state;
    if (cartArray[i].qty > 1){
      cartArray[i].qty--; 
      this.setState({ cartArray: [...cartArray] })
      this.saveStore();
    }
  }

  get treatsAmount(){
    console.log(this.state.cartArray)
    return this.state.cartArray.reduce((acc, prev) => prev.qty + acc, 0)
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.cartArray !== this.state.cartArray){
      let total = this.state.cartArray.reduce((sum, product)=>
        sum + product.treat.price, 0 );

    this.setState({
      cartTotal: total
    })
    this.saveStore();
    // console.log("prevState", prevState)
    // console.log("State",this.state)
    } 
  }

  removeItem = (treatObj) => {
    let updatedCart = this.state.cartArray.filter((treat) => {
      return treat.treat.id !== treatObj.treat.id
    })
    this.setState({
      cartArray: updatedCart
    })
    this.saveStore();
  }

  clearItems = () => {
    this.setState({
      cartArray: []
    });
    this.saveStore();
  }

  updateUser(user){
    this.setState({
      user: {
        ...this.state.user,
        ...user
      }
    })
    this.saveStore();
  }

  updateShippingMethod(evt){
    this.setState({shippingMethod: +evt.currentTarget.value})
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
          treatsAmount={this.treatsAmount}
          // loggedIn={loggedIn}
          // handleLogOut={this.handleLogOut}
          // username={this.state.user.username}
        />

        <Switch>
          
          <Route path="/" exact > 
            <Home/>
          </Route>

          <Route path="/shop" exact render={() => <TreatList 
            treats={filteredTreats}/>} />

          {/* ITEM DETAIL */}
          <Route path="/treats/:id" render={routeProps => {
              return <TreatInfo match={routeProps.match}
                addItemToCart={this.addItemToCart}/>}} />

          <Route path="/shipping-guidelines" exact render={() => <ShippingGuidelines/>}/>

          <Route path="/about" exact render={() => <AboutPage/>}/>
          
          <Route path="/account" exact render={() => <LoginForm/>}/>

          <Route path="/cart" exact render={() => 
            <CartPage cartArray={this.state.cartArray}
                  cartActions={cartActions}
                  removeItem={this.removeItem}
                  cartTotal={this.state.cartTotal}
                  increaseItem={this.increaseItem}
                  decreaseItem={this.decreaseItem} />} />

          {/* Catch-all for if none of the routes above matches */}
          <Route path="/checkout" exact render={() => <CheckoutForm 
            cartArray={this.state.cartArray}
            user={this.state.user}
            updateUser={(user) => this.updateUser(user)}/>}/>
          <Route path="/shipping" exact render={() => <ShippingForm 
            cartArray={this.state.cartArray}
            updateShippingMethod={(evt) => this.updateShippingMethod(evt)}
            user={this.state.user}/>}/>
          <Route path="/payment" exact render={() => <PaymentForm cartArray={this.state.cartArray}/>}/>
          {/* <Route component={NotFoundPage}/> */}
        </Switch>

        <Footer/>
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
