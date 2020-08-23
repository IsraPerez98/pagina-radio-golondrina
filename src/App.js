import React, { Component } from 'react';

import './css/styles.scss';

import { BrowserRouter, Route } from 'react-router-dom';

import BarraSuperior from './componentes/barra-navegacion/barra-navegacion';
import Reproductor from './componentes/reproductor';

import Contacto from './componentes/paginas/contacto';

class App extends Component {
	render() {
		return (
			<div className="App">
			<BrowserRouter>
				<BarraSuperior />
				<Route path="/contacto/" component={Contacto} />
				<Reproductor/>
			</BrowserRouter>
			</div>
		);
	}
}

export default App;
