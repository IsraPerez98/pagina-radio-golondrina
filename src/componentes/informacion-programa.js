import React, { Component } from "react";

import "../css/componentes/informacion-programa.scss";


class InformacionPrograma extends Component {
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

    generarBloqueHorario(info_programa, bloque_programa) {
        const titulo = bloque_programa.programa;

        if (titulo === "Programacion Regular") {
            return (
                <div className="bloque-horario">

                </div>
            )
        } else {
            const hora_inicio = bloque_programa.hora_inicio;
            const hora_termino = bloque_programa.hora_termino;

            return (
                <div className="bloque-horario" style={{ info_programa: info_programa.color_texto }}>
                    <label className="encuentranos">Encuentranos todos los {this.diasSemana()}</label>
                    <label className="de">Desde las {hora_inicio} horas</label>
                    <label className="hasta">Hasta las {hora_termino} horas</label>
                </div>
            )
        }
    }

    render() {
        const { info_programa, bloque_programa, funcion_cerrar } = this.props;

        //console.log({info_programa});
        //console.log({bloque_programa});

        const titulo = bloque_programa.programa;

        const color_principal = info_programa.colores[0];
        const color_secundario = info_programa.colores[1];

        const descripcion_programa = info_programa.descripcion;

        const bloque_horario = this.generarBloqueHorario(info_programa, bloque_programa);

        return (
            <div className="bloque-programa" style={{ backgroundColor: color_principal }}>
                <div className="barra-titulo" style={{ backgroundColor: color_secundario }}>
                    <label className="titulo" style={{ info_programa: info_programa.color_texto }}>{titulo}</label>
                    {funcion_cerrar && <button className="boton-cerrar" onClick={funcion_cerrar}>X</button>}
                </div>
                <div className="contenido-programa">
                    {bloque_horario}
                    <div className="bloque-descripcion-programa">
                        <label className="descripcion-programa" style={{ info_programa: info_programa.color_texto }}>{descripcion_programa}</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default InformacionPrograma;