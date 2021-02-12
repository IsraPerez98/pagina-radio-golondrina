import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import ScrollIntoView from "../ScrollIntoView";


class NavLinks extends Component {
    render() {
        return(
            <div className="div-nav-links">
                <ScrollIntoView>
                    <NavLink className="nav-link" exact to="/">
                        Inicio
                    </NavLink>
                    <NavLink className="nav-link" to="/programacion/">
                        Programacion
                    </NavLink>
                    <NavLink className="nav-link" to="/contacto/">
                        Contacto
                    </NavLink>
                    <NavLink className="nav-link" to="/nosotros/">
                        Nosotros
                    </NavLink>
                </ScrollIntoView>
            </div>
        )
    }
}


export default NavLinks;