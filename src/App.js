import React, { Component } from 'react';

import './css/styles.scss';

import { BrowserRouter, Route } from 'react-router-dom';

import BarraSuperior from './componentes/barra-navegacion/barra-navegacion';
import Reproductor from './componentes/reproductor';
import BarraInferior from './componentes/barra-inferior.js';

import Inicio from './componentes/paginas/inicio/inicio';
import Programacion from './componentes/paginas/programacion';
import Contacto from './componentes/paginas/contacto';
import Nosotros from './componentes/paginas/nosotros';

import Programas from './programas';
import ModalPrograma from './componentes/modal-programa';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			programa_actual: Programas.getProgramaActual(),

			programa_modal: {
				abierto: false,
				info_programa: null,
				bloque_programa: null,
			}
		}

		this.actualizarProgramaActual = this.actualizarProgramaActual.bind(this);
		this.abrirModalPrograma = this.abrirModalPrograma.bind(this);
		this.cerrarModalPrograma = this.cerrarModalPrograma.bind(this);
	}

	actualizarProgramaActual() {
		const programa_actual = Programas.getProgramaActual();
		this.setState({
			programa_actual: programa_actual,
		})

		console.log(`Recargando datos del programa en ${programa_actual.minutos_restantes} minutos`);

		setTimeout(this.actualizarProgramaActual, programa_actual.minutos_restantes * 60000);
	}

	componentDidMount() {
		// como ya recargamos los datos del programa actual al principio, los llamaremos denuevo en 5 minutos
		setTimeout(this.actualizarProgramaActual, 5 * 60000);
	}

	abrirModalPrograma(info_programa, bloque_programa) {
		this.setState({
			programa_modal: {
				abierto: true,
				info_programa: info_programa,
				bloque_programa: bloque_programa,
			}
		})
	}

	cerrarModalPrograma() {
		this.setState({
			programa_modal: {
				abierto: false,
			}
		})
	}

	render() {

		const programa_actual = this.state.programa_actual;
		
		const programa_modal = this.state.programa_modal;

		return (
			<div className="App">
			<BrowserRouter>
				<BarraSuperior />
				<ModalPrograma 
					abierto={programa_modal.abierto}
					
					info_programa={programa_modal.info_programa}
					bloque_programa={programa_modal.bloque_programa}

					cerrarModalPrograma={this.cerrarModalPrograma}
				/>

				<Route 
					exact path="/" 
					render={
						(props) => 
                			<Inicio
							programa_actual={programa_actual}
						/>
					}
				/>

				<Route 
					path="/programacion/" 
					render={
						(props) => 
                		<Programacion
                  			Programas={Programas}
							abrirModalPrograma={this.abrirModalPrograma}
						/>
					}
				/>
				
				<Route path="/contacto/" component={Contacto} />
				<Route path="/nosotros/" component={Nosotros} />
				<BarraInferior/>
				<Reproductor
					Programas={Programas}
					programa_actual={programa_actual}
					abrirModalPrograma={this.abrirModalPrograma}
				/>
			</BrowserRouter>
			</div>
		);
	}
}

export default App;
