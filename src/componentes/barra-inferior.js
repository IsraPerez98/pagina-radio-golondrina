import React from "react";

import "../css/componentes/barra-inferior.scss";

import logo_subtel from "../img/logo_subtel_reducido.png";

class BarraInferior extends React.Component {
    render() {
        return (
            <footer className="barra-inferior">
                <div className="footer primero">
                    <h2 className="radio-golondrina">Radio Golondrina 106.1 FM</h2>
                    <h3 className="footer-frase">Te Acompaña!</h3>
                    <p className="footer-copyright">
                        Radio Golondrina &copy; {new Date().getFullYear()}
                    </p>
                    <img
                        className="img-subtel"
                        alt="Subsecretaria de Telecomunicaciones"
                        src={logo_subtel}
                        onClick={() =>
                            window.open("https://www.subtel.gob.cl/", "_blank")
                        }
                    ></img>
                </div>
                <div className="footer segundo">
                    <div className="datos direccion">
                        <i className="fa fa-map-marker"></i>
                        <p>La Concepcion 232 Paine, RM</p>
                    </div>
                    <div className="datos telefono">
                        <i className="fa fa-phone"></i>
                        <p>232 540494</p>
                    </div>
                    <div className="datos email">
                        <i className="fa fa-envelope"></i>
                            <a href="mailto:radiogolondrinapaine@gmail.com">
                                <p>radiogolondrinapaine@gmail.com</p>
                            </a>
                    </div>
                </div>
                <div className="footer tercero">
                    <p className="footer-marca-registrada">
                        Radio Golondrina es una marca registrada de la
                        asociacion cultural y deportiva Cristalina.
                    </p>
                    <div className="footer-iconos">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.facebook.com/pages/category/Media-News-Company/Radio-Golondrina-Paine-1475870435852133/"
                        >
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://api.whatsapp.com/send?phone=56965926481"
                        >
                            <i className="fa fa-whatsapp"></i>
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="mailto:radiogolondrinapaine@gmail.com"
                        >
                            <i className="fa fa-envelope"></i>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default BarraInferior;
