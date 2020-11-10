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
      // id: "1",
      // username: "",
      // email: ""
    },

    activeItem: "home",

    // Current logged in user's token (boolean)
    token: ""

    // For infinite scroll
  };

  // Accessing an array of treats from the backend
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeItem: this.props.history.location.pathname.slice(1)
      })
    }, 100)
    const dirtySavedStore = localStorage.getItem('store');
    if(dirtySavedStore) {
      const savedStore = JSON.parse(dirtySavedStore)
      this.setState(savedStore);
    }
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
      // console.log(result)
      this.setState({user: result.user});
      this.saveStore();
      localStorage.token = result.token;
      return true;
    }
  };
  
  handleLogOut() {
    console.log(this)
    this.setState({
      user: {},
      cartArray: [], 
      cartTotal: 0
    });
    this.saveStore();
    localStorage.clear();
    this.props.history.push('/');
    this.handleItemClick({}, {name: "home"});
  }

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

  handleItemClick = (evt, { name }) => {
    this.setState({ activeItem: name })
  }

  updateActiveMenuItem(evt, activeItem) {
    
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
          handleLogOut={() => this.handleLogOut()}
          user={this.state.user}
          handleItemClick={this.handleItemClick}
          activeItem={this.state.activeItem}
        />

        <Switch>
          
          <Route path="/" exact > 
            <Home/>
          </Route>

          <Route path="/shop" exact render={() => <TreatList 
            handleItemClick={this.handleItemClick}
        
            treats={filteredTreats}/>} />

          {/* ITEM DETAIL */}
          <Route path="/treats/:id" render={routeProps => {
              return <TreatInfo match={routeProps.match}
                addItemToCart={this.addItemToCart}/>}} />

          <Route path="/shipping-guidelines" exact render={() => <ShippingGuidelines/>}/>

          <Route path="/about" exact render={() => <AboutPage/>}/>
          
          <Route path="/account" exact render={() => <LoginForm handleResponse={this.handleResponse}
            handleItemClick={this.handleItemClick}/>}/>
          
          <Route path="/create-account" exact render={() => 
            <CreateAccountForm
              // user={this.state.user}
              handleSubmit={this.handleSubmit}
              handleInput={this.handleInput}
              updateUser={(user) => this.updateUser(user)}
              handleItemClick={this.handleItemClick}
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
            updateShippingMethod={(evt) => this.updateShippingMethod(evt)}
            shippingMethod={this.state.shippingMethod}
            user={this.state.user}/>}/>
          <Route path="/payment" exact render={() => <PaymentForm 
            cartArray={this.state.cartArray}
            user={this.state.user}
            // updateShippingMethod={(evt) => this.updateShippingMethod(evt)}
            shippingMethod={this.state.shippingMethod}/>}/>
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

export default withRouter(App);
