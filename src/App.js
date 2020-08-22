import React, { Component } from 'react';

import './css/fuentes.scss';

import { BrowserRouter, Route } from 'react-router-dom';

import BarraSuperior from './componentes/barra-navegacion';

class App extends Component {
	render() {
		return (
			<div className="App">
			<BrowserRouter>
				<BarraSuperior />
			</BrowserRouter>
			</div>
		);
	}
}

export default App;
