import React, { Component } from "react";

import Covid19 from './covid19';
import ProgramaActual from "./programa-actual";

import '../../../css/componentes/paginas/inicio/inicio.scss';

class Inicio extends Component {
    //se le pasa this.props.programa_actual

    render() {
        return(
            <div className="pagina-inicio">
                <Covid19 />
                <ProgramaActual 
                    programa_actual={this.props.programa_actual}
                />
            </div>
        )
    }
}

export default Inicio;