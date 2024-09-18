import './Scroll.css';
import Image from 'next/image';

import html from '../../../public/assets/html.png';
import css from '../../../public/assets/css.png';
import js from '../../../public/assets/js.png';
import react from '../../../public/assets/react.png';
import bootstrap from '../../../public/assets/bootstrap.png';
import git from '../../../public/assets/git.png';
import bicicleta from '../../../public/assets/bicicleta.png';
import videogame from '../../../public/assets/videogame.png';
import brasil from '../../../public/assets/brasil.png';
import italia from '../../../public/assets/italia.png';

export default function ScrollAbout() {
    return (
        <div className="main_container">
            <div className="wrapper">
                <div className="item item1"><Image src={html} alt='HTML' className='img_about' /></div>
                <div className="item item2"><Image src={css} alt='CSS' className='img_about' /></div>
                <div className="item item3"><Image src={js} alt='JAVASCRIPT' className='img_about'/></div>
                <div className="item item4"><Image src={react} alt='REACT' className='img_about'/></div>
                <div className="item item5"><Image src={bootstrap} alt='BOOTSTRAP' className='img_about'/></div>
                <div className="item item6"><Image src={git} alt='GIT' className='img_about'/></div>
                <div className="item item7"><Image src={bicicleta} alt='Bike' className='img_about'/></div>
                <div className="item item8"><Image src={videogame} alt='Videogame' className='img_about'/></div>
                <div className="item item9"><Image src={brasil} alt='Brazil' className='img_about'/></div>
                <div className="item item10"><Image src={italia} alt='Italy' className='img_about' /></div>
            </div>
        </div>
    )
}