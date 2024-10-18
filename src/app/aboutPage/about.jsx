'use client';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import styles from './About.module.css';
import download from '../../../public/assets/download.png'

import ScrollAbout from '@/components/scroll/scroll';

export default function AboutPage({ language }) {

    const [textAbout, setTextAbout] = useState(language('aboutMe'))

    const ShowMessage = (message) => {
        setTextAbout(message)
    }

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    return (
        <div className={styles.main} id='about' data-aos='fade-right'>
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