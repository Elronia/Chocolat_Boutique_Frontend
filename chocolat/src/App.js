import React, {Component} from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import NavBar from './component/NavBar';
import Home from './component/Home';
import HomeCarousel from './component/HomeCarousel';
import ShippingGuidelines from './component/ShippingGuidelines';
import AboutPage from './component/AboutPage';
import Search from './component/Search';
import LoginForm from './component/LoginForm';
import CreateAccountForm from './component/CreateAccountForm';
import TreatList from './component/TreatList';
import TreatCard from './component/TreatCard';
import TreatInfo from './component/TreatInfo';
import CartPage from './component/CartPage';
import CartItem from './component/CartItem';
import CheckoutForm from './component/CheckoutForm';
import ShippingForm from './component/ShippingForm';
import PaymentForm from './component/PaymentForm';
import Footer from './component/Footer';
import NotFoundPage from './component/NotFoundPage';


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
      // id: "1",
      // username: "",
      // email: ""
    },

    activeItem: "home",

    // Current logged in user's token (boolean)
    token: ""

    // For infinite scroll
  };

  componentDidMount() {
    // wait for router to load and setting navbar active item (0.1sec)
    setTimeout(() => {
      this.setState({
        activeItem: this.props.history.location.pathname.slice(1)
      })
    }, 100)
    // load saved stored data of the whole application
    const unparsedSavedStore = localStorage.getItem('store');
    if(unparsedSavedStore) {
      const savedStore = JSON.parse(unparsedSavedStore)
      this.setState(savedStore);
    }
    // Accessing an array of treats from the backend
    fetch('http://localhost:3000/treats')
      .then(resp => resp.json())
      .then((treatsArr) => {
        this.setState({
          treats: treatsArr
        })
      })
  }
  // saves all the data from the whole application 
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
  handleLogin = (result) => {
    if (result.error) {
      alert(result.error);
      return false;
    } else {
      // console.log(result)
      this.setState({user: result.user});
      this.saveStore();
      localStorage.token = result.token;
      return true;
    }
  };
  //removes user's data and navigates him to Home page
  handleLogOut() {
    this.setState({
      user: {},
      cartArray: [], 
      cartTotal: 0
    });
    this.saveStore();
    localStorage.clear();
    this.props.history.push('/');
    this.updateActiveMenuItem({}, {name: "home"});
  }

  addItemToCart = (id) => {
    const { cartArray } = this.state;
    //const cartArray = this.state.cartArray;
    // Find the item for this id in this.state.treats
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
    //increase quantity in the cart 
    if (foundTreatIndex !== -1) {
      this.increaseItem(foundTreatIndex)
    } else {
      // Item is not in cart, add to cart.
      this.setState({ 
        cartArray: [...cartArray, { treat, qty: 1 }]})
        this.saveStore();
    }
  }

  //increases the quantity
  increaseItem = (i) => {
    const { cartArray } = this.state;
    cartArray[i].qty++; 
    //updates the state
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

  //gets the quantity of all the treats in the cart
  get treatsAmount(){
    // console.log(this.state.cartArray)
    // counts the quantity of all items and returns just one number
    return this.state.cartArray.reduce((acc, prev) => prev.qty + acc, 0)
  }

  //is called after each setState
  componentDidUpdate(prevProps, prevState){
    if(prevState.cartArray !== this.state.cartArray){
      //total of all all items in the cart
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
    //returns only those items that don't correspond treat object (treatObj.treat.id)
    let updatedCart = this.state.cartArray.filter((treat) => {
      return treat.treat.id !== treatObj.treat.id
    })
    //update the state
    this.setState({
      cartArray: updatedCart
    })
    //saves global state into local storage
    this.saveStore();
  }

  // removes all the treats from the cart
  clearItems = () => {
    this.setState({
      cartArray: []
    });
    this.saveStore();
  }

  //updates user data
  updateUser(user){
    this.setState({
      //merge new user data into current user state (this.state.user)
      user: {
        ...this.state.user,
        ...user
      }
    })
    this.saveStore();
  }

  //when clicking navbar menu updates active item
  updateActiveMenuItem = (evt, { name }) => {
    this.setState({ activeItem: name })
  }

  //updates shipping cost in global state as a number
  updateShippingCost(evt){
    this.setState({shippingCost: +evt.currentTarget.value})
  }


  render() {
    // console.log(this.props)

    //performs search of treats by name 
    let filteredTreats = this.state.treats.filter((treatObj) => {
      return treatObj.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })

    //collects all cart actions in a single object
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
          handleLogOut={() => this.handleLogOut()}
          user={this.state.user}
          updateActiveMenuItem={this.updateActiveMenuItem}
          activeItem={this.state.activeItem}
        />

        <Switch>
          
          <Route path="/" exact > 
            <Home/>
          </Route>

          <Route path="/shop" exact render={() => <TreatList 
            updateActiveMenuItem={this.updateActiveMenuItem}
        
            treats={filteredTreats}/>} />

          {/* ITEM DETAIL */}
          <Route path="/treats/:id" render={routeProps => {
              return <TreatInfo match={routeProps.match}
                addItemToCart={this.addItemToCart}/>}} />

          <Route path="/shipping-guidelines" exact render={() => <ShippingGuidelines/>}/>

          <Route path="/about" exact render={() => <AboutPage/>}/>
          
          <Route path="/account" exact render={() => <LoginForm handleLogin={this.handleLogin}
            updateActiveMenuItem={this.updateActiveMenuItem}/>}/>
          
          <Route path="/create-account" exact render={() => 
            <CreateAccountForm
              // user={this.state.user}
              handleSubmit={this.handleSubmit}
              handleInput={this.handleInput}
              updateUser={(user) => this.updateUser(user)}
              updateActiveMenuItem={this.updateActiveMenuItem}
            />}/>

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
            updateShippingCost={(evt) => this.updateShippingCost(evt)}
            shippingCost={this.state.shippingCost}
            user={this.state.user}/>}/>
          <Route path="/payment" exact render={() => <PaymentForm 
            cartArray={this.state.cartArray}
            user={this.state.user}
            // updateShippingCost={(evt) => this.updateShippingCost(evt)}
            shippingCost={this.state.shippingCost}/>}/>
          <Route component={NotFoundPage}/>
        </Switch>

        <Footer/>
      </div>
    );
  }

}

export default withRouter(App);
