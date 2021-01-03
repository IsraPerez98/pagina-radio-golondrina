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

    click() {
        console.log("click");
    }
    
    generarBloquesDia(dia) {
        const Programas = this.props.Programas; // import de programas.js
        
        const programas = this.state.programas; // objeto con la lista de programas, nombre, descripcion, colores
        const horario = this.state.horario;
        const horario_dia = horario[dia]; // horario del dia correspondiente


        const bloques = []; // aqui se almacenaran los JSX de los bloques del dia

        const hora_base_min = 7 * 60; // 7 am

        //const offset = 2; // offset para la posicion

        for(let i in horario_dia) {
            const bloque_programa = horario_dia[i];

            const hora_inicio_min = Programas.horaStringAMinutos(bloque_programa.hora_inicio);
            const hora_termino_min = Programas.horaStringAMinutos(bloque_programa.hora_termino);

            const top = (hora_inicio_min - hora_base_min) * 2;

            const altura = (hora_termino_min - hora_inicio_min) * 2; // (60 / 30) 60 pixeles por cada 30 minutos

            //console.log(bloque_programa.programa," altura: ", altura, "horas: ", hora_inicio_min, hora_termino_min);

            const info_programa = programas[bloque_programa.programa];
            //const descripcion = info_programa.descripcion;
            const color_principal = info_programa.colores[0];
            //const color_secundario = info_programa.colores[1];

            const color_texto = info_programa.color_texto;

            bloques.push(
                <div className="bloque-programa" 
                    key={i} 
                    style={{top: top, height: altura, backgroundColor: color_principal}}
                    //onClick={this.props.abrirModalPrograma(bloque_programa.programa, descripcion, color_principal, color_secundario )}
                    onClick={() => this.props.abrirModalPrograma(info_programa, bloque_programa)}
                >
                    <label className="horas-programa" style={{color: color_texto}}>
                        {bloque_programa.hora_inicio} - {bloque_programa.hora_termino}
                    </label>
                    <label className="nombre-programa" style={{color: color_texto}}>{bloque_programa.programa}</label>
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
                <div className="bloque-hora" key={i}>
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