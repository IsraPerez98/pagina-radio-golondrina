import React, {Component} from 'react';
import '../../css/componentes/paginas/nosotros.scss';

class Nosotros extends Component {

    render() {
        return (
            <div className="pagina-nosotros">
                <div className="imagen-radio">
                    
                </div>
                <div className="nuestra-mision">
                    <h2>- Nuestra Misión -</h2>
                    <span>
                        Nos destacamos por nuestra labor social informativa, fundamentamos en los valores de diversidad cultural, inclusión, convivencia democrática, libertad de expresión, responsabilidad y ética informativa para el Paine actual y del Futuro y su audiencia. Somos una herramienta democratizadora en su más amplio significado que busca servir a la sociedad en la promoción de una comunidad informada y acompañada en todo momento.
                    </span>
                </div>
                <div className="quienes-somos">
                    <h2>- Quiénes Somos -</h2>
                    <span>
                    Radio Golondrina Paine es una emisora de servicio público, con especial énfasis en el aspecto cultural, educativo y también de sana entretención con transmisión las 24 horas del día.
                    </span>
                </div>
                <div className="ubicacion">
                    <span>Nuestros estudios estan ubicados en Av. Pdte. Prieto 0380, Paine, Región Metropolitana</span>
                    <iframe className="iframe-mapa" title="mapa" frameBorder="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d629.2239987529155!2d-70.74701532895544!3d-33.81354969270181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9663230e848f3c4f%3A0x2606d318a11df7cf!2s1ra%20Compa%C3%B1ia%20de%20Bomberos%20Paine!5e0!3m2!1ses-419!2scl!4v1609659129493!5m2!1ses-419!2scl" ></iframe>
                </div>
            </div>
        );
    }
}

export default Nosotros;