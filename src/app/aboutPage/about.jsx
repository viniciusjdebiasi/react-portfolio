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

import ScrollAbout from '@/components/scroll/scroll';

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
            </div>
            <ScrollAbout />
            <a href={language('resumePdf')} download={language('resumePdf')} className={styles.resume_button}>{language('resume')}&nbsp;&nbsp;&nbsp;<Image src={download} alt='Download' className={styles.download_img} /></a>

        </div>
    )
}