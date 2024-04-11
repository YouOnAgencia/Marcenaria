import React, { useState } from 'react';

import Externa1 from '../Images/externa.png';
import Externa2 from '../Images/externa1.png';
import Externa3 from '../Images/externa2.png';
import Externa4 from '../Images/externa4.png';
import Externa5 from '../Images/externa5.png';
import Externa6 from '../Images/externa6.png';

import Cozinha1 from '../Images/cozinha.png';
import Cozinha2 from '../Images/cozinha1.png';
import Cozinha3 from '../Images/cozinha2.png';

import Sala1 from '../Images/sala.png';
import Sala2 from '../Images/sala1.png';
import Sala3 from '../Images/sala2.png';

import Quarto1 from '../Images/quarto.png';
import Quarto2 from '../Images/quarto1.png';
import Quarto3 from '../Images/quarto2.png';


function Ambientes() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedGallery, setSelectedGallery] = useState('all');

    const images = {
        casamento: [Sala1, Sala2, Sala3],
        aniversarios: [Cozinha1, Cozinha2, Cozinha3],
        esportes: [Externa1, Externa2, Externa3, Externa4, Externa5, Externa6],
        all: [Quarto1, Quarto2, Quarto3]
    };

    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
    };

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images[selectedGallery].length) % images[selectedGallery].length);
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images[selectedGallery].length);
    };

    const handleFilterClick = (ambiente) => {
        setSelectedGallery(ambiente);
        setCurrentImageIndex(0); // Reset image index when changing gallery
    };

    return (
        <>
            <section className="ambientes" id='LinkAmbientes'>
                <div className='maxWidth'>
                <h4 className="ambiente_h4">Ambientes Planejados</h4>
                <h1 className="ambiente_h1">Alguns Ambientes que Projetamos</h1>

                <ul className="ambienteUl">
                    <li><button onClick={() => handleFilterClick('all')} className={selectedGallery === 'all' ? 'selected' : ''}>Quartos</button></li>
                    <li><button onClick={() => handleFilterClick('casamento')} className={selectedGallery === 'casamento' ? 'selected' : ''} data-ambiente="casamento">Salas</button></li>
                    <li><button onClick={() => handleFilterClick('aniversarios')} className={selectedGallery === 'aniversarios' ? 'selected' : ''} data-ambiente="aniversarios">cozinhas</button></li>
                    <li><button onClick={() => handleFilterClick('esportes')} className={selectedGallery === 'esportes' ? 'selected' : ''} data-ambiente="esportes">Área externa</button></li>
                </ul>
                
            

            <div className="galerias">
                <div className={`galeria ${selectedGallery}`}>
                    {images[selectedGallery].map((image, index) => (
                        <img className='singleImg'
                            key={index}
                            src={image}
                            alt={`${selectedGallery} ${index + 1}`}
                            onClick={() => handleImageClick(index)}
                        />
                    ))}
                </div>
            </div>
{/* 
            <div className="modal" id="modal">
                <div className="modal-content" id="modal-content">
                    <span className="close" id="close" onClick={() => setCurrentImageIndex(0)}>&times;</span>
                    <img src={images[selectedGallery][currentImageIndex]} alt="" id="modal-img" />
                    <button className="prev" id="prev" onClick={handlePrevClick}>&#10094;</button>
                    <button className="next" id="next" onClick={handleNextClick}>&#10095;</button>
                </div>
            </div> */}

            </div>
            </section>
        </>
    );
}

export default Ambientes;
