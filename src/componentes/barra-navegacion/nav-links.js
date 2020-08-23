import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class NavLinks extends Component {
    render() {
        return(
            <div className="div-nav-links">
                <NavLink className="nav-link" exact to="/">
                    Inicio
                </NavLink>
            </div>
        )
    }
}


export default NavLinks;