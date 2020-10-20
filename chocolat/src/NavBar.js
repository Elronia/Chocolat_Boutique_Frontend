import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class NavBar extends React.Component {

        render() {
          return (
            <NavLink className="item" to="/" exact>Home</NavLink>
            
          )
        }
}


export default NavBar;