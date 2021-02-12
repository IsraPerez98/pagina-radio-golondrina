import React, { Component } from "react";

import ordenanza_mascarillas from '../../../img/covid19/ordenanza-mascarillas.webp';
import prevencion from '../../../img/covid19/prevencion.webp';

import '../../../css/componentes/paginas/inicio/covid19.scss';

class Covid19 extends Component {

    clickOrdenanzaMascarillas() {
        window.open("https://www.paine.cl/ordenanza-municipal-obliga-el-uso-de-mascarilla-en-espacios-publicos-en-paine/", "_blank");
    }

    clickAutocuidado() {
        window.open("https://www.gob.cl/coronavirus/autocuidado/", "_blank");
    }

    render() {
        return(
            <div className="covid19">
                <div 
                    className="bloque-covid19 ordenanza-mascarillas"
                >
                    <img
                        className="img ordenanza-mascarillas"
                        alt="Ordenanza Uso Obligatorio de Mascarillas en Paine"
                        src={ordenanza_mascarillas}
                        onClick={this.clickOrdenanzaMascarillas}
                    ></img>
                    <label 
                        className="texto revisa-ordenanza"
                        onClick={this.clickOrdenanzaMascarillas}
                    >
                        Para mas informacion acerca del uso obligatorio de mascarillas consulta la pagina oficial de nuestra municipalidad <span>paine.cl</span> 
                    </label>
                </div>
                {/*
                <div 
                    className="bloque-covid19 autocuidado"
                >
                    <img
                        className="img prevencion"
                        alt="Medidas de Prervencion de Contagio de Coronavirus"
                        src={prevencion}
                        onClick={this.clickAutocuidado}
                    ></img>
                    <label 
                        className="texto autocuidado"
                        onClick={this.clickAutocuidado}
                    >
                        Para mas informacion acerca de esta y mas medidas de autocuidado revisa el sitio oficial del Gobierno de Chile <span>https://www.gob.cl/coronavirus/autocuidado/</span>
                    </label>
                </div>
                */}
            </div>
        )
    }
}

export default Covid19;