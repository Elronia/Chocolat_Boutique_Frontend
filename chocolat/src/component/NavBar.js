import React from 'react';
import Search from './Search';
// import { NavBar } from 'react-router-dom'
import { NavLink, withRouter } from 'react-router-dom';
import { Menu, Icon, Image } from 'semantic-ui-react';
import logo from './BoutiqueLogo.png';
import '../styling/NavBar.css';


class NavBar extends React.Component {

    //checks if user is logged in by token and id
    get isLoggedIn() {
        return !!(localStorage.token && this.props.user.id)
    }

    render() {
        //get activeItem from global state
        const { activeItem="" } = this.props
        // console.log(activeItem)

        return (
        <div>
            <Menu pointing secondary>
                <Menu.Menu>
            <Menu.Item className="item"
                as={NavLink} to="/"
                name='home'
                active={activeItem === 'home'}
                onClick={this.props.updateActiveMenuItem}
            />
            <Menu.Item
                as={NavLink} to="/shop"
                name='Shop'
                active={activeItem === 'Shop'}
                onClick={this.props.updateActiveMenuItem}
            />
             <Menu.Item
                as={NavLink} to="/shipping-guidelines"
                name='ShippingGuidelines'
                active={activeItem === 'ShippingGuidelines'}
                onClick={this.props.updateActiveMenuItem}
            /> 
            <Menu.Item
                as={NavLink} to="/about"
                name='About'
                active={activeItem === 'About'}
                onClick={this.props.updateActiveMenuItem}
            /> 
            </Menu.Menu>

        <Menu.Menu>
            <Menu.Item>
                <Image as={NavLink} to="/"
                    src={logo} size="medium" onClick={this.handleLogoClick}/>
            </Menu.Item>
        </Menu.Menu>
            
        <Menu.Menu>
            {/* shows search activeItem === 'shop' */}
            <Menu.Item className="search-input" style={{width: "15vw"}}>
            {activeItem.toLowerCase() === 'shop' 
                ? 
                        <Search searchTerm={this.props.searchTerm}
                        changeSearchTerm={this.props.changeSearchTerm}/>
                     
                : null}
            </Menu.Item>
                
            <Menu.Item>
              
            </Menu.Item>
            {this.isLoggedIn ? <Menu.Item
                className="signin-out"
                onClick={(evt) => this.props.handleLogOut(evt)}> 
                <i class="user icon"></i><span>Sign Out</span>
                </Menu.Item>
                : <Menu.Item
                as={NavLink} to="/account"
                className="signin-out"
                // active={activeItem === <i class="fas fa-user"></i>}
                // active={activeItem === 'LoginForm'}
                // onClick={this.props.updateActiveMenuItem}
            >
                <i class="user icon"></i><span>Sign In</span>
                </Menu.Item>}
            
            <Menu.Item
                className="signin-out"
                as={NavLink} to="/cart"
                // header={true}
                // active={activeItem === 'Cart'}
                onClick={this.props.updateActiveMenuItem}
            >  
            <i class="shopping bag icon"></i><span>Cart - {this.props.treatsAmount}</span>
            </Menu.Item>
            </Menu.Menu>
        </Menu>
    </div>
    )
  }

}


export default withRouter(NavBar);