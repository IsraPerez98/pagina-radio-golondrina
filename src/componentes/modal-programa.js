import React, { Component } from "react";
import Modal from "react-modal";

import "../css/componentes/modal-programa.scss";

import InformacionPrograma from './informacion-programa';

class ModalPrograma extends Component {

    componentDidMount() {
        Modal.setAppElement(document.getElementById('root'));
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

    render() {
        const {info_programa, bloque_programa, cerrarModalPrograma, abierto} = this.props;
        //const info_programa = this.props.info_programa;
        //const bloque_programa = this.props.bloque_programa;

        if(!(info_programa)) return (<div></div>);
        if(!(bloque_programa)) return (<div></div>);

        return (
            <Modal 
                className="modal-programa" 
                onRequestClose={cerrarModalPrograma}
                shouldCloseOnOverlayClick={true}
                isOpen={abierto}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0,0,0,0.3)",
                        backdropFilter: "blur(5px)",
                        position: "fixed",
                        zIndex: "5",
                    },
                }}
            >
                <InformacionPrograma
                    info_programa = {info_programa}
                    bloque_programa = {bloque_programa}
                    funcion_cerrar = {cerrarModalPrograma}
                />
                {/*
                <div className="bloque-programa">
                    <div className="barra-titulo" style={{backgroundColor: info_programa.colores[1]}}>
                        <label className="titulo" style={{color: info_programa.color_texto}} >{bloque_programa.programa}</label>
                        <button className="boton-cerrar" onClick={cerrarModalPrograma}>X</button>
                    </div>
                    <div className="contenido-programa" style={{backgroundColor: info_programa.colores[0]}}>
                        <div className="bloque-horario" style={{color: info_programa.color_texto}}>
                            <label className="encuentranos">Encuentranos todos los {this.diasSemana()}</label>
                            <label className="de">Desde las {bloque_programa.hora_inicio} horas</label>
                            <label className="hasta">Hasta las {bloque_programa.hora_termino} horas</label>
                        </div>
                        <div className="bloque-descripcion-programa">
                            <label className="descripcion-programa" style={{color: info_programa.color_texto}}>{info_programa.descripcion}</label>
                        </div>
                    </div>
                </div>
                */}
            </Modal>
        );
    }
}

export default ModalPrograma;
