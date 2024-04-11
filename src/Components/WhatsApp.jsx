import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function WhatsApp() {

    return (
        <div>

            <div class="whatsapp">
                <a href="https://wa.me/55(aqui seu numero com ddd | tudo junto)?text=Adorei%20seu%20artigo" target="_blank">
                    <i><FontAwesomeIcon icon={faWhatsapp}/></i>
                </a>
            </div>

        </div>
    )
}