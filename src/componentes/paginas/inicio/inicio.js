import React, { Component } from "react";

import Covid19 from './covid19';

import '../../../css/componentes/paginas/inicio/inicio.scss';

class Inicio extends Component {
    render() {
        return(
            <div className="pagina-inicio">
                <Covid19 />
            </div>
        )
    }
}

export default Inicio;