import React from 'react';
import Search from './Search';
// import { NavBar } from 'react-router-dom'
import { NavLink, withRouter } from 'react-router-dom';
import { Input, Menu } from 'semantic-ui-react';

class NavBar extends React.Component {

    state = { 
        activeItem: 'home'
    }

    handleItemClick = (evt, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
        <div>
            <Menu pointing secondary>
            <Menu.Item
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
                as={NavLink} to="/about"
                name='About'
                active={activeItem === 'About'}
                onClick={this.handleItemClick}
            /> 
          
          <Menu.Menu position='right'>
            <Menu.Item style={{width: "15vw"}}
                name='Search'
                active={activeItem === 'Search'}
                onClick={this.handleItemClick}
                > 
                <Search searchTerm={this.props.searchTerm}
                changeSearchTerm={this.props.changeSearchTerm}/>
            </Menu.Item>
              
          
            <Menu.Item
                as={NavLink} to="/account"
                name='Account'
                active={activeItem === 'LoginForm'}
                onClick={this.handleItemClick}
            />
            <Menu.Item
                as={NavLink} to="/cart"
                name='Cart'
                active={activeItem === 'Cart'}
                onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
 
        {/* <Segment>
          <img src='/images/wireframe/media-paragraph.png' />
        </Segment>  */}
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


export default NavBar;