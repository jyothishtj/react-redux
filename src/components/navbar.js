import React from 'react';
// import {Link, NavLink} from 'react-router-dom';
import {NavLink, withRouter} from 'react-router-dom'; // add active class to anchor tag
const Navbar = (props) => {
        return (
        <nav className="navbar navbar-expand-lg navbar-light" role="navigation">
                        <a href="/" className="brand-logo">Chicken Recipes</a>
               <ul className="nav nav-tabs ml-auto">
               <li className="nav-item"><NavLink className="nav-link" to="/" exact activeStyle={{ color:'green' }} >Home</NavLink></li>
               <li className="nav-item"><NavLink className="nav-link" to="/About" activeStyle={{ color:'green' }}>About</NavLink></li>
               <li className="nav-item"><NavLink className="nav-link" to="/Contact" activeStyle={{ color:'green' }}>Contact Us</NavLink></li>
               </ul>
                  </nav>
    )
}
export default withRouter(Navbar);