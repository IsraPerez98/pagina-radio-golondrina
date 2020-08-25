import React, { Component } from "react";

import "../css/componentes/reproductor.scss";

class Reproductor extends Component {
    // se le pasa this.props.programa_actual

    constructor(props) {
        super(props);

        this.audioRef = React.createRef();
        this.botonPlay = React.createRef();
        this.botonMute = React.createRef();
        this.barraVolumen = React.createRef();

        this.clickBotonPlay = this.clickBotonPlay.bind(this);
        this.clickBotonMute = this.clickBotonMute.bind(this);
        this.cambioBarraVolumen = this.cambioBarraVolumen.bind(this);
        this.clickNombrePrograma = this.clickNombrePrograma.bind(this);
    }

    clickBotonPlay(evento) {
        if (this.audioRef.current.paused) {
            this.botonPlay.current.className = "boton-play stop";
            this.audioRef.current.src =
                "https://streaming.radiogolondrina.cl/golondrina128";
            this.audioRef.current.play();
        } else {
            this.botonPlay.current.className = "boton-play play";
            this.audioRef.current.pause();
            this.audioRef.current.src = "";
        }
    }

    clickBotonMute(evento) {
        if (!this.audioRef.current.muted) {
            this.audioRef.current.muted = true;
            this.botonMute.current.className = "boton-mute mute";
        } else {
            this.audioRef.current.muted = false;
            this.botonMute.current.className = "boton-mute sonando";
        }
    }

    cambioBarraVolumen(evento) {
        const volumen = this.barraVolumen.current.value / 100;
        this.audioRef.current.volume = volumen;

        if (volumen === 0) {
            this.audioRef.current.muted = true;
            this.botonMute.current.className = "boton-mute mute";
        } else {
            this.audioRef.current.muted = false;
            this.botonMute.current.className = "boton-mute sonando";
        }
    }

    clickNombrePrograma() {
        const programa_actual = this.props.programa_actual;
        const nombre = programa_actual.bloque_programa.programa;

        if(nombre === "Programacion Regular"){
            return;
        }

        const descripcion = programa_actual.programa.descripcion;
        const color_principal = programa_actual.programa.colores[0];
        const color_secundario = programa_actual.programa.colores[1];

        this.props.abrirModalPrograma(nombre, descripcion, color_principal, color_secundario);
    }

    render() {
        const programa_actual = this.props.programa_actual;
        const nombre_programa = programa_actual.bloque_programa.programa;
        const colores_programa = programa_actual.programa.colores;

        document.documentElement.style.setProperty("--barra-volumen-color-fondo", colores_programa[0]);
        document.documentElement.style.setProperty("--barra-volumen-color-boton", colores_programa[1]);
        
        return (
            <div>
                <div className="reproductor-espacio"></div>
                <div className="reproductor">
                    <div className="reproductor-interior">
                        <div 
                            className="reproductor-div-izquierda"
                            onClick={this.clickNombrePrograma}
                        >
                            <label className="suena-ahora">
                                Suena Ahora en Golondrina FM
                            </label>
                            <label className="nombre-programa" style={{color: colores_programa[0]}}>
                                {nombre_programa}
                            </label>
                        </div>
                        <div className="reproductor-div-centro">
                            <button
                                className="boton-play play"
                                ref={this.botonPlay}
                                onClick={this.clickBotonPlay}
                                style={{backgroundColor: colores_programa[0]}}
                            ></button>
                        </div>
                        <div className="reproductor-div-derecha">
                            <button
                                className="boton-mute sonando"
                                ref={this.botonMute}
                                onClick={this.clickBotonMute}
                                style={{backgroundColor: colores_programa[0]}}
                            ></button>
                            <input
                                className="barra-volumen"
                                type="range"
                                min="0"
                                max="100"
                                step="1"
                                defaultValue="100"
                                ref={this.barraVolumen}
                                onChange={this.cambioBarraVolumen}
                            ></input>
                        </div>
                    </div>
                    <audio ref={this.audioRef} className="audio-player">
                        <source type="audio/mpeg" />
                        Tu navegador no es compatible con esta caracteristica.
                    </audio>
                </div>
            </div>
        );
    }
}

export default Reproductor;
