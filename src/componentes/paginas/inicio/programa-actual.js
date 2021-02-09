import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import '../../../css/componentes/paginas/inicio/programa-actual.scss';

class ProgramaActual extends Component {

    constructor(props) {
        super(props);
        
        this.diasSemana = this.diasSemana.bind(this);
        this.generarBloqueHorario = this.generarBloqueHorario.bind(this);
    }

    diasSemana() {
        const fecha = new Date();

        const dias_semana = [
            "Domingos",
            "Lunes",
            "Martes",
            "Miercoles",
            "Jueves",
            "Viernes",
            "Sabados",
        ];

        return dias_semana[fecha.getDay()];
    }

    generarBloqueHorario(programa_actual) {
        const titulo = programa_actual.bloque_programa.programa;
        const info_programa = programa_actual.programa;

        if(titulo === "Programacion Regular") {
            return(
                <div className="bloque-horario">

                </div>
            )
        } else {
            const hora_inicio = programa_actual.bloque_programa.hora_inicio;
            const hora_termino = programa_actual.bloque_programa.hora_termino;

            return(
                <div className="bloque-horario" style={{info_programa: info_programa.color_texto}}>
                    <label className="encuentranos">Encuentranos todos los {this.diasSemana()}</label>
                    <label className="de">Desde las {hora_inicio} horas</label>
                    <label className="hasta">Hasta las {hora_termino} horas</label>
                </div>
            )
        }
    }

    render() {
        const { programa_actual } = this.props;

        //console.log({programa_actual});

        const titulo = programa_actual.bloque_programa.programa;

        const info_programa = programa_actual.programa;

        const color_principal = programa_actual.programa.colores[0];
        const color_secundario = programa_actual.programa.colores[1];

        const descripcion_programa = programa_actual.programa.descripcion;

        const bloque_horario = this.generarBloqueHorario(programa_actual);

        return(
            <div className="programa-actual">
                <div className="bloque-suena-ahora">
                    <label className="suena-ahora">Suena ahora en tu Radio Golondrina</label>
                </div>
                <div className="bloque-programa" style={{backgroundColor: color_principal}}>
                    <div className="barra-titulo" style={{backgroundColor: color_secundario}}>
                        <label className="titulo" style={{info_programa: info_programa.color_texto}}>{titulo}</label>
                    </div>
                    <div className="contenido-programa">
                        {bloque_horario}
                        <div className="bloque-descripcion-programa">
                            <label className="descripcion-programa" style={{info_programa: info_programa.color_texto}}>{descripcion_programa}</label>
                        </div>
                    </div>
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