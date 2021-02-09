import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import '../../../css/componentes/paginas/inicio/programa-actual.scss';

import InformacionPrograma from '../../informacion-programa';

class ProgramaActual extends Component {

    render() {
        const { programa_actual } = this.props;

        const bloque_programa = programa_actual.bloque_programa;

        const info_programa = programa_actual.programa;

        return(
            <div className="programa-actual">
                <div className="bloque-suena-ahora">
                    <label className="suena-ahora">Suena ahora en tu Radio Golondrina</label>
                </div>
                    <div className="div-info-programa">
                        <InformacionPrograma
                            info_programa = {info_programa}
                            bloque_programa = {bloque_programa}
                        />
                    </div>
                <div className="bloque-revisa-programacion">
                    <label className="revisa-programacion">
                        Revisa nuestra programacion completa en <NavLink className="nav-link" to="/programacion/">Programacion</NavLink>
                    </label>
                </div>
            </div>
        )
    }
}

export default ProgramaActual;