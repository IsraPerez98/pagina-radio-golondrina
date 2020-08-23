import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class NavLinks extends Component {
    render() {
        return(
            <div className="div-nav-links">
                <NavLink className="nav-link" exact to="/">
                    Inicio
                </NavLink>
                <NavLink className="nav-link" to="/contacto/">
                    Contacto
                </NavLink>
            </div>
        )
    }
}


export default NavLinks;