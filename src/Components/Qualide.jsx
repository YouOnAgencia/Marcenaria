import ProjetoIMG from '../Images/blueprint.png'
import ProjetoIMG2 from '../Images/inovacao.png'
import ProjetoIMG3 from '../Images/qualidade.png'
import About1 from '../Images/about-1.jpg'



function Qualidade() {

    return (
        <>

            <section className='qualidade' id='LinkQualidade'>
                <div className="maxWidth">

                    <div className="qualidadeContent">

                        <article className="contentText">
                            <h4 className="contentText_h4">Móveis Planejados</h4>
                            <h1 className="contentText_h1" >Móveis Planejados com Qualidade e Tradição</h1>
                            <p className="contentText_p">Somos especialistas em criar ambientes modernos e otimizados. Projetamos cozinhas, quartos, banheiros, espaços gourmets, escritórios home office e ambientes corporativos.</p>

                            <div className="iconsWrapper">
                                <div className="iconsSingle">
                                    <img src={ProjetoIMG} alt="" />
                                </div>

                                <div className='iconsText'>
                                    <h5 className='iconsText_h5'>Projetos Exclusivos</h5>
                                    <p className='iconsText_p'>Contamos com uma variedade de acabamentos, texturas e designs exclusivos para que o seu planejado seja único e do seu jeito!</p>
                                </div>
                            </div>

                            <div className="iconsWrapper">
                                <div className="iconsSingle">
                                    <img src={ProjetoIMG2} alt="" />
                                </div>

                                <div className='iconsText'>
                                    <h5 className='iconsText_h5'>Inovação em Planejados</h5>
                                    <p className='iconsText_p'>Buscamos sempre novas soluções para ambientes que promovem a otimização do espaço e atendem às suas necessidades! </p>
                                </div>
                            </div>

                            <div className="iconsWrapper">
                                <div className="iconsSingle">
                                    <img src={ProjetoIMG3} alt="" />
                                </div>

                                <div className='iconsText'>
                                    <h5 className='iconsText_h5'>Referência no ramo</h5>
                                    <p className='iconsText_p'>Há mais de 10 anos no mercado trazendo confiança e qualidade para projetos que atendem às suas expectativas!</p>
                                </div>
                            </div>
                        </article>

                        <article className='contentImg'>
                            <img src={About1} alt="" />
                        </article>

                    </div>

                </div>
            </section>

        </>
    )
}
export default Qualidade










