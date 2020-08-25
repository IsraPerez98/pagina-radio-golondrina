import React, { Component } from "react";
import Modal from "react-modal";

import "../css/componentes/modal-programa.scss";

class ModalPrograma extends Component {
    constructor(props) {
        super(props);

        this.state = {
            abierto: false,
        };

        this.cerrarModal = this.cerrarModal.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props !== prevProps) {
            this.setState({
                abierto: true,
            });
        }
    }

    cerrarModal() {
        this.setState({
            abierto: false,
        })
    }

    render() {
        return (
            <Modal 
                className="modal-programa" 
                isOpen={this.state.abierto}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0,0,0,0.3)",
                        backdropFilter: "blur(5px)",
                    },
                }}
            >
                <div
                    className="barra-superior"
                    style={{ backgroundColor: this.props.color_principal }}
                >
                    <label className="titulo-modal">{this.props.nombre}</label>
                    <button className="fa fa-window-close" onClick={this.cerrarModal}></button>
                </div>
                <div className="espacio-descripcion">
                    <label>{this.props.descripcion}</label>
                </div>
            </Modal>
        );
    }
}

export default ModalPrograma;
