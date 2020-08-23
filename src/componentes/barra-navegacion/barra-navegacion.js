import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Collapsible from 'react-collapsible';

import NavLinks from './nav-links';

import favicon from "../../img/favicon.png";

import '../../css/barra-navegacion.scss';

class BarraNavegacion extends Component {
    render() {
        return(
            <div className="barra-navegacion">
                <div className="contenido-barra-navegacion">
                    <div className="div-logo">
                        <img
                            className="logo-img"
                            src={favicon}
                            alt="Logo"
                        />
                        <NavLink className="logo-link" to="/">
                            <h1>Radio Golondrina Paine</h1>
                        </NavLink>    
                    </div>
                    <Collapsible 
                        trigger= {
                            <div className="boton-navegacion">
                                <span className="fa fa-bars"></span>
                            </div>
                        }
                    >
                        <NavLinks/>
                    </Collapsible>
                    <div className="navegacion-escritorio">
                        <NavLinks/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BarraNavegacion;