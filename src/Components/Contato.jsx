import { faSquareInstagram, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contato() {

    return (
        <>
            <section className="contato" id='LinkContato'>
                <div className="maxWidth">

                    <div className="contatoWrapper">

                        <article className="contentText">
                            <h4 className="contentText_h4">Entre em contato</h4>
                            <h1 className="contentText_h1">Venha tornar seu projeto em realidade conosco.</h1>
                            <p className="contentText_p">Personalize sua mobília e dê identidade para o seu projeto com qualidade, sofisticação e o melhor do mercado de móveis! Atendemos às suas expectativas e realizamos os seus sonhos!</p>

                            <div className="redesSociais">
                                <i><FontAwesomeIcon icon={faSquareInstagram} /></i>
                                <i><FontAwesomeIcon icon={faSquareWhatsapp} /></i>
                            </div>

                            <div className="contatoInfo">
                                <FontAwesomeIcon icon={faLocationDot} />
                                <p>Avenida Morumbi, 1000 | São Paulo - SP </p>
                            </div>
                        </article>

                        <form action="">
                            <div className="w50">
                                <input type="text" placeholder="Seu Nome" />
                                <input type="text" placeholder="Seu Telefone" />
                            </div>

                            <div className="w50">
                                <input type="text" placeholder="Seu E-mail" />
                                <input type="text" placeholder="Seu CEP" />
                            </div>

                            <div className="w100">
                                <input type="text" placeholder="Quais Ambientes deseja fazer?" />
                                <textarea placeholder="Sua observação aqui!"></textarea>
                            </div>
                            <button className="btnForm">Enviar</button>
                        </form>

                    </div>

                </div>
            </section>
        </>
    )
}
export default Contato