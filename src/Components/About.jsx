import AboutMain from '../Images/aboutMain.jpg'


function About() {

    return (
        <>
            <section className="about" id='LinkAbout'>
                <div className="maxWidth">
                    <div className='aboutWrapper'>
                        <article className='aboutImg'>
                            <img src={AboutMain} alt="" />
                        </article>
                        <article className="aboutText">
                            <h4 className="aboutText_h4">Quem Somos</h4>
                            <h1 className="aboutText_h1" >Mais de 10 anos projetando sonhos. Nossa meta é a realização do seu sonho!</h1>
                            <p className="aboutText_p">Levar tecnologia, qualidade e soluções inteligentes para os seus projetos é o nosso objetivo há mais de 10 anos! Para manter esse compromisso, continuamos inovando! Estamos sempre em busca da satisfação de nossos clientes para garantir uma experiência de qualidade do início ao fim do projeto do seu planejado.</p>

                            <div className='aboutNumber'>
                                <h1 className='aboutNumber_h1'>10</h1>
                                <h3 className='aboutNumber_h3'>Anos projetando</h3>
                            </div>
                        </article>
                    </div>

                </div>

                <div className='mapBg'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.7339734098196!2d-48.12055908805991!3d-22.288064879610733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c7784af1176799%3A0x3be6df1fd749aa09!2sRelik%20madeiras!5e0!3m2!1spt-BR!2sbr!4v1712846495184!5m2!1spt-BR!2sbr"></iframe>
                    </div>
            </section>
        </>
    )
}

export default About