import React, { Component } from 'react';

import './css/styles.scss';

import { BrowserRouter, Route } from 'react-router-dom';

import BarraSuperior from './componentes/barra-navegacion/barra-navegacion';
import Reproductor from './componentes/reproductor';
import BarraInferior from './componentes/barra-inferior.js';

import Contacto from './componentes/paginas/contacto';

import Programas from './programas';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			programa_actual: Programas.programaActual(),
		}

		this.actualizarProgramaActual = this.actualizarProgramaActual.bind(this);
	}

	actualizarProgramaActual() {
		const programa_actual = Programas.programaActual();
		this.setState({
			programa_actual: programa_actual,
		})

		console.log(`Recargando datos del programa en ${programa_actual.minutos_restantes} minutos`);

		setTimeout(this.actualizarProgramaActual, programa_actual.minutos_restantes * 60000);
	}

	componentDidMount() {
		this.actualizarProgramaActual();
	}

	render() {

		const programa_actual = this.state.programa_actual;
		

		return (
			<div className="App">
			<BrowserRouter>
				<BarraSuperior />
				<Route path="/contacto/" component={Contacto} />
				<BarraInferior/>
				<Reproductor
					programa_actual={programa_actual}
				/>
			</BrowserRouter>
			</div>
		);
	}
}

export default App;
