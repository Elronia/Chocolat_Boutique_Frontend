import React from 'react';
import Search from './Search';
// import { NavBar } from 'react-router-dom'
import { NavLink, withRouter } from 'react-router-dom';
import { Menu, Icon, Image } from 'semantic-ui-react';
import logo from './BoutiqueLogo.png';
import '../styling/NavBar.css';


class NavBar extends React.Component {

    get isLoggedIn() {
        return !!(localStorage.token && this.props.user.id)
    }

    render() {
        const { activeItem="" } = this.props
        console.log(activeItem)

        return (
        <div>
            <Menu pointing secondary>
            <Menu.Item className="item"
                as={NavLink} to="/"
                name='home'
                active={activeItem === 'home'}
                onClick={this.props.handleItemClick}
            />
            <Menu.Item
                as={NavLink} to="/shop"
                name='Shop'
                active={activeItem === 'Shop'}
                onClick={this.props.handleItemClick}
            />
             <Menu.Item
                as={NavLink} to="/shipping-guidelines"
                name='ShippingGuidelines'
                active={activeItem === 'ShippingGuidelines'}
                onClick={this.props.handleItemClick}
            /> 
            <Menu.Item
                as={NavLink} to="/about"
                name='About'
                active={activeItem === 'About'}
                onClick={this.props.handleItemClick}
            /> 

        <Menu.Menu position='right'>
            <Menu.Item>
                <Image as={NavLink} to="/"
                    src={logo} size="medium" onClick={this.handleLogoClick}/>
            </Menu.Item>
        </Menu.Menu>
            
          
        <Menu.Menu className='nav-container' position='right'>
            {activeItem.toLowerCase() === 'shop' 
                ? <Menu.Item className="search-input" style={{width: "15vw"}}
                    name='Search'
                    // active={activeItem === 'Search'}
                    > 
                    <Search searchTerm={this.props.searchTerm}
                        changeSearchTerm={this.props.changeSearchTerm}/>
                </Menu.Item> 
                : null}
                
            <Menu.Item>
              <Icon class="shopping-bag-icon" name="Cart" size="large"/>
              <i class="user icon"></i>
            </Menu.Item>
            {this.isLoggedIn ? <Menu.Item
                name='Sign Out'
                onClick={(evt) => this.props.handleLogOut(evt)}
            /> : <Menu.Item
                as={NavLink} to="/account"
                name='Sign In'
                active={activeItem === <i class="fas fa-user"></i>}
                active={activeItem === 'LoginForm'}
                onClick={this.props.handleItemClick}
            />}
            
            <Menu.Item>
              <Icon class="shopping-bag-icon" name="Cart" size="large"/>
              <i class="shopping bag icon"></i>
            </Menu.Item>
            <Menu.Item
                as={NavLink} to="/cart"
                header={true}
                name={`Cart - ${this.props.treatsAmount}`}
                active={activeItem === 'Cart'}
                onClick={this.props.handleItemClick}
            />  
            </Menu.Menu>
        </Menu>
    </div>
    )
  }

        // render() {
        //   return (
        //     // <NavBar></NavBar>  
        //     // <NavLink className="item" to="/" exact>Home</NavLink>
        //     <nav className="NavBarItems">
        //         <h1 className="navbar-logo"></h1>
        //         <div className="menu-icon"></div>
        //         <ul>
        //             <li><a href=""></a></li>
        //         </ul>
        //     </nav>
        //   )
        // }
}


export default withRouter(NavBar);