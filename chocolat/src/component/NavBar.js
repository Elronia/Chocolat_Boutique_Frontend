import React from 'react';
import Search from './Search';
// import { NavBar } from 'react-router-dom'
import { NavLink, withRouter } from 'react-router-dom';
import { Menu, Icon, Image } from 'semantic-ui-react';
import logo from './BoutiqueLogo.png';
import '../styling/NavBar.css';


class NavBar extends React.Component {

    state = { 
        activeItem: 'home'
    }

    componentDidMount() {
        this.setState({
            activeItem: this.props.history.location.pathname.slice(1)
        })
    }

    handleItemClick = (evt, { name }) => {
        this.setState({ activeItem: name })
    }

    render() {
        const { activeItem } = this.state

        return (
        <div>
            <Menu pointing secondary>
            <Menu.Item className="item"
                as={NavLink} to="/"
                name='home'
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
            />
            <Menu.Item
                as={NavLink} to="/shop"
                name='Shop'
                active={activeItem === 'Shop'}
                onClick={this.handleItemClick}
            />
             <Menu.Item
                as={NavLink} to="/shipping-guidelines"
                name='ShippingGuidelines'
                active={activeItem === 'ShippingGuidelines'}
                onClick={this.handleItemClick}
            /> 
            <Menu.Item
                as={NavLink} to="/about"
                name='About'
                active={activeItem === 'About'}
                onClick={this.handleItemClick}
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
                    active={activeItem === 'Search'}
                    onClick={this.handleItemClick}> 
                    <Search searchTerm={this.props.searchTerm}
                        changeSearchTerm={this.props.changeSearchTerm}/>
                </Menu.Item> 
                : null}
                
            <Menu.Item>
              <Icon class="shopping-bag-icon" name="Cart" size="large"/>
              <i class="user icon"></i>
            </Menu.Item>
            <Menu.Item
                as={NavLink} to="/account"
                name='Account'
                active={activeItem === <i class="fas fa-user"></i>}
                active={activeItem === 'LoginForm'}
                onClick={this.handleItemClick}
            />
            
            <Menu.Item>
              <Icon class="shopping-bag-icon" name="Cart" size="large"/>
              <i class="shopping bag icon"></i>
            </Menu.Item>
            <Menu.Item
                as={NavLink} to="/cart"
                header={true}
                name={`Cart - ${this.props.treatsAmount}`}
                active={activeItem === 'Cart'}
                onClick={this.handleItemClick}
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