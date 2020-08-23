import React, {Component} from 'react';
import '../../css/componentes/paginas/contacto.scss';

class Contacto extends Component {

    render() {
        return (
                <div className="pagina-contacto">
                    <div className="cuadro-contacto whatsapp">
                        <h2 className="titulo">Via Whatsapp</h2>
                        <a href="https://api.whatsapp.com/send?phone=56965926481" target="_blank" rel="noopener noreferrer" className="fa fa-whatsapp"> </a>
                        <div className="texto">
                            <h3 className="escribenos">Escribenos</h3>
                            <a href="https://api.whatsapp.com/send?phone=56965926481" target="_blank" rel="noopener noreferrer" className="texto2 numero-wsp">+56 9 6592 6481</a>
                        </div>
                    </div>
                    <div className="cuadro-contacto telefono">
                        <h2 className="titulo">Via Telefono</h2>
                        <div className="fa fa-phone"></div>
                        <div className="texto">
                            <h3>Llamanos</h3>
                            <p className="texto2 numero-tel">232 5420494</p>
                        </div>
                    </div>
                    <div className="cuadro-contacto gmail">
                        <h2 className="titulo">Via Email</h2>
                        <a href="mailto:radiogolondrinapaine@gmail.com" className="fa fa-envelope"> </a>
                        <div className="texto">
                            <h3>Escribenos</h3>
                            <a href="mailto:radiogolondrinapaine@gmail.com" className="texto2 gmail">RadioGolondrinaPaine@gmail.com</a>
                        </div>
                    </div>
                    <div className="cuadro-contacto facebook">
                        <h2 className="titulo">Via Facebook</h2>
                        <a href="https://www.facebook.com/pages/category/Media-News-Company/Radio-Golondrina-Paine-1475870435852133/" target="_blank" rel="noopener noreferrer" className="fa fa-facebook"> </a>
                        <div className="texto">
                            <h3>Escribenos</h3>
                            <a href="https://www.facebook.com/pages/category/Media-News-Company/Radio-Golondrina-Paine-1475870435852133/" target="_blank" rel="noopener noreferrer" className="texto2 facebook">Radio Golondrina Paine</a>
                        </div>
                    </div>
                </div>

        );
    }
}

export default Contacto;