import React from 'react';
import Search from './Search';
// import { NavBar } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

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
                name='home'
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
            />
            <Menu.Item
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
                name='Account'
                active={activeItem === 'Login'}
                onClick={this.handleItemClick}
            />
            <Menu.Item
                name='Cart'
                active={activeItem === 'Login'}
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