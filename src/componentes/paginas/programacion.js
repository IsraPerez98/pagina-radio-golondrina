import React, {Component} from 'react';

import '../../css/componentes/paginas/programacion.scss';

class Programacion extends Component {
    // se le pasa this.props.Programas

    constructor(props) {
        super(props);

        this.state = {
            programas: this.props.Programas.getProgramas(),
            horario: this.props.Programas.getHorario(),
        }

        this.generarBloquesDia = this.generarBloquesDia.bind(this);
        this.generarDias = this.generarDias.bind(this);
    }

    
    generarBloquesDia(dia) {
        //const programas = this.state.programas;
        const horario = this.state.horario;
        const horario_dia = horario[dia]; // horario del dia correspondiente


        const bloques = []; // aqui se almacenaran los JSX de los bloques del dia

        for(let i in horario_dia) {
            const bloque_programa = horario_dia[i];

            bloques.push(
                <div className="bloque-programa" key={i}>
                    <label className="horas-programa">
                        {bloque_programa.hora_inicio} - {bloque_programa.hora_termino}
                    </label>
                    <label className="nombre-programa">{bloque_programa.programa}</label>
                </div>
            )
        }
        return bloques;
    }

    generarDias() {
        const dias = [
            "Lunes",
            "Martes",
            "Miercoles",
            "Jueves",
            "Viernes",
            "Sabado",
            "Domingo"
        ];

        const jsx_dias = [];

        for(let i in dias) {
            const dia = dias[i];

            jsx_dias.push(
                <div className={`dia ${dia}`} key={i} >
                    <label className="titulo-dia">{dia}</label>
                    <div className={`bloques-dia ${dia}`}>
                        {this.generarBloquesDia(dia)}
                    </div>
                </div>
            )
        }

        return jsx_dias;

    }

    render() {
        const jsx_dias = this.generarDias();
        return(
            <div className="pagina-programacion">
                {jsx_dias}
            </div>
        )
    }
}

export default Programacion;