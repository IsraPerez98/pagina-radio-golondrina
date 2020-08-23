import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Collapsible from 'react-collapsible';

import NavLinks from './nav-links';

import favicon from "../../img/favicon.png";

import '../../css/componentes/barra-navegacion.scss';

class BarraNavegacion extends Component {

    constructor(props) {
        super(props);

        this.state = {
            collapsible_open: false,
        };

        this.cerrarCollapsible = this.cerrarCollapsible.bind(this);
        this.abrirCollapsible = this.abrirCollapsible.bind(this);
    }

    cerrarCollapsible() {
        this.setState({
            collapsible_open: false,
        });
    }

    abrirCollapsible() {
        this.setState({
            collapsible_open: true,
        })
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.cerrarCollapsible);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.cerrarCollapsible);
    }

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
                        open = {this.state.collapsible_open}
                        handleTriggerClick = {this.abrirCollapsible}
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