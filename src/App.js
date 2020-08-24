import React, { Component } from 'react';

import './css/styles.scss';

import { BrowserRouter, Route } from 'react-router-dom';

import BarraSuperior from './componentes/barra-navegacion/barra-navegacion';
import Reproductor from './componentes/reproductor';
import BarraInferior from './componentes/barra-inferior.js';

import Contacto from './componentes/paginas/contacto';

import Programas from './programas';

class App extends Component {
	render() {

		const programa_actual = Programas.programaActual();
		

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
