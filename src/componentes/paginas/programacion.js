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
        const Programas = this.props.Programas;
        
        //const programas = this.state.programas;
        const horario = this.state.horario;
        const horario_dia = horario[dia]; // horario del dia correspondiente


        const bloques = []; // aqui se almacenaran los JSX de los bloques del dia

        const hora_base_min = 7 * 60; // 7 am

        for(let i in horario_dia) {
            const bloque_programa = horario_dia[i];

            const hora_inicio_min = Programas.horaStringAMinutos(bloque_programa.hora_inicio);
            const hora_termino_min = Programas.horaStringAMinutos(bloque_programa.hora_termino);

            const top = (hora_inicio_min - hora_base_min) * 2;

            const altura = (hora_termino_min - hora_inicio_min) * 2; // (60 / 30) 30 pixeles por cada 30 minutos

            bloques.push(
                <div className="bloque-programa" key={i} style={{top: top, height: altura}}>
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

    generarHoras() {
        const jsx_horas = [];

        for(let i=7; i<25; i++ ){
            jsx_horas.push(
                <div className="bloque-hora">
                    <label className="hora">{i}:00</label>
                </div>
            )
        }

        return jsx_horas;
    }

    render() {
        const jsx_dias = this.generarDias();
        const jsx_horas = this.generarHoras();
        return(
            <div className="pagina-programacion">
                <div className="bloques-horas">
                    {jsx_horas}
                </div>
                {jsx_dias}
            </div>
        )
    }
}

export default Programacion;