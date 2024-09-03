'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './About.module.css';
import download from '../../../public/assets/download.png'

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

export default function AboutPage({ language }) {

    const [textAbout, setTextAbout] = useState(language('aboutMe'))

    const ShowMessage = (message) => {
        setTextAbout(message)
    }

    return (
        <div className={styles.main} id='about'>
            <div>
                <h2 className={styles.page_title}>{language('headerAbout')}</h2>
                <div className={styles.container}>
                    <div className={styles.buttons_container}>
                        <button className={styles.buttons} onClick={() => { ShowMessage(language('aboutMe')) }} >{language('professionalLife')}</button>
                        <button className={styles.buttons} onClick={() => { ShowMessage(language('aboutMeHobby')) }}>{language('personalLife')}</button>
                        <p className={styles.text_about}>{textAbout}</p>
                    </div>
                </div>
                <div className={styles.container_img}>
                    <figure className={styles.img_card}>
                        <Image src={html} alt='HTML' className={styles.img_about} />
                        <figcaption>HTML</figcaption>
                    </figure>
                    <figure className={styles.img_card}>
                        <Image src={css} alt='CSS' className={styles.img_about} />
                        <figcaption>CSS</figcaption>
                    </figure>
                    <figure className={styles.img_card}>
                        <Image src={js} alt='JAVASCRIPT' className={styles.img_about} />
                        <figcaption>JAVASCRIPT</figcaption>
                    </figure>
                    <figure className={styles.img_card}>
                        <Image src={react} alt='REACT' className={styles.img_about} />
                        <figcaption>REACT</figcaption>
                    </figure>
                    <figure className={styles.img_card}>
                        <Image src={bootstrap} alt='BOOTSTRAP' className={styles.img_about} />
                        <figcaption>BOOTSTRAP</figcaption>
                    </figure>
                    <figure className={styles.img_card}>
                        <Image src={git} alt='GIT' className={styles.img_about} />
                        <figcaption>GIT</figcaption>
                    </figure>
                    <figure className={styles.img_card}>
                        <Image src={bicicleta} alt='Bike' className={styles.img_about} />
                        <figcaption>{language('bike')}</figcaption>
                    </figure>
                    <figure className={styles.img_card}>
                        <Image src={videogame} alt='Videogame' className={styles.img_about} />
                        <figcaption>{language('videoGame')}</figcaption>
                    </figure>
                    <figure className={styles.img_card}>
                        <Image src={brasil} alt='Brazil' className={styles.img_about} />
                        <figcaption>{language('headerFlagBrazil')}</figcaption>
                    </figure>
                    <figure className={styles.img_card}>
                        <Image src={italia} alt='Italy' className={styles.img_about} />
                        <figcaption>{language('headerFlagItaly')}</figcaption>
                    </figure>
                </div>
            </div>

            <a href="/resume_en.pdf" download='resume_en.pdf' className={styles.resume_button}>{language('resume')}&nbsp;&nbsp;&nbsp;<Image src={download} alt='Download' className={styles.download_img} /></a>
        </div>
    )
}