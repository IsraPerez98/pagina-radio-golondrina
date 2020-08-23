import React, {Component} from 'react';

import '../css/componentes/reproductor.scss';

class Reproductor extends Component {
    constructor(props) {
        super(props);

        this.audioRef = React.createRef();
        this.botonPlay = React.createRef();
        this.botonMute = React.createRef();
        this.barraVolumen = React.createRef();
        
        this.clickBotonPlay = this.clickBotonPlay.bind(this);
        this.clickBotonMute = this.clickBotonMute.bind(this);
        this.cambioBarraVolumen = this.cambioBarraVolumen.bind(this);
    }

    clickBotonPlay(evento) {
        if (this.audioRef.current.paused) {
            this.botonPlay.current.className = "boton-play stop";
            this.audioRef.current.src = "https://streaming.radiogolondrina.cl/golondrina128";
            this.audioRef.current.play();
        } else {
            this.botonPlay.current.className = "boton-play play";
            this.audioRef.current.pause();
            this.audioRef.current.src = "";
        }
    }

    clickBotonMute(evento) {
        if(!this.audioRef.current.muted) {
            this.audioRef.current.muted = true;
            this.botonMute.current.className = "boton-mute mute";
        } else {
            this.audioRef.current.muted = false;
            this.botonMute.current.className = "boton-mute sonando";
        }
    }

    cambioBarraVolumen(evento) {
        const volumen = this.barraVolumen.current.value / 100
        this.audioRef.current.volume = volumen;

        if(volumen === 0) {
            this.audioRef.current.muted = true;
            this.botonMute.current.className = "boton-mute mute";
        } else {
            this.audioRef.current.muted = false;
            this.botonMute.current.className = "boton-mute sonando";
        }
    }

    render() {
        return(
            <div className="reproductor">
                <div className="reproductor-interior">
                    <div className="reproductor-div-izquierda">
                        <label className="suena-ahora">Suena Ahora en Golondrina FM</label>
                        <label className="nombre-programa">SAMPLE TEXT</label>
                    </div>
                    <div className="reproductor-div-centro">  
                        <button 
                            className="boton-play play"
                            ref={this.botonPlay}
                            onClick={this.clickBotonPlay}
                        >
                        </button>  
                    </div>
                    <div className="reproductor-div-derecha">   
                        <button 
                            className="boton-mute sonando"
                            ref={this.botonMute}
                            onClick={this.clickBotonMute}
                        >
                        </button>
                        <input 
                            className="barra-volumen" 
                            type="range" 
                            min="0" 
                            max="100" 
                            step="1" 
                            defaultValue="100" 
                            
                            ref={this.barraVolumen}
                            onChange={this.cambioBarraVolumen}
                        >
                        </input>
                    </div>
                </div>
                <audio ref={this.audioRef} className="audio-player">
                    <source type="audio/mpeg" />
                    Tu navegador no es compatible con esta caracteristica.
		        </audio>
            </div>
        )
    }
}

export default Reproductor;