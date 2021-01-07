import React, {Component} from 'react';
import { FacebookProvider, Page } from 'react-facebook';

import '../../../css/componentes/paginas/inicio/facebook.scss';

class Facebook extends Component {

    render() {
        return (
            <div className="facebook">
                <div className="texto">
                    <h3>Entérate de nuestras novedades
                        <br/>Ve tus programas favoritos en vivo
                        <br/>Revive programas pasados
                        <br/>A través nuestra pagina de Facebook
                    </h3>
                </div>
                <div className="facebook-provider">
                    <FacebookProvider appId="200574404670312">
                        <Page href="https://www.facebook.com/pages/category/Media-News-Company/Radio-Golondrina-Paine-1475870435852133/" tabs="timeline" />
                    </FacebookProvider>
                </div>
            </div>
        );
    }
}

export default Facebook;