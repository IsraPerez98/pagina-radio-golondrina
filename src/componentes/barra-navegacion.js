import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import favicon from "../img/favicon.png";

class BarraNavegacion extends Component {
    render() {
        return(
            <div className="barra-superior">
                <div className="fondo-barra-superior"></div>
                <div className="contenido-barra-superior">
                    <div className="div-logo">
                        <img
                            className="logo-img"
                            src={favicon}
                            alt="Logo"
                        />
                        <h1>
                            <NavLink className="logo-link" to="/">
                                Radio Golondrina Paine
                            </NavLink>
                        </h1>
                    </div>
                    <div className="div-navegacion">
                        <NavLink className="nav-link" exact to="/">
                            Inicio
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default BarraNavegacion;