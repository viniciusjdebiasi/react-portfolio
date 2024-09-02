'use client';
import React from 'react';
import Image from 'next/image';
import styles from './Home.module.css';
import Me from '../../../public/assets/me3.png';
import Github from '../../../public/assets/github.png';
import Whatsapp from '../../../public/assets/whatsapp.png';
import Linkedin from '../../../public/assets/linkedin.png';

export default function HomePage({ language }) {

    return (
        <div className={styles.main}>
            <div className={styles.main_container}>
                <div className={styles.homePage}>
                    <div>
                        <p className={styles.p}>{language('welcomeMessage')}</p>
                        <h1 className={styles.h1}>&lt; {language('meMessage')} /&gt;</h1>
                    </div>

                    <div className={styles.link_contain}>
                    <a href="https://www.linkedin.com/in/vinicius-jos%C3%A9-debiasi-835573255/" target='_blank'><Image src={Linkedin} alt='Linkedin' className={styles.icons} /></a>
                        <a href="https://github.com/viniciusjdebiasi" target='_blank'><Image src={Github} alt='Github' className={styles.icons} /></a>
                        <a href="tel:+393314289570"><Image src={Whatsapp} alt='WhatsApp' className={styles.icons} /></a>
                    </div>
                </div>

                <div>
                    <Image src={Me} alt='Vinicius Jose De Biasi' className={styles.img_me} />
                </div>
            </div>
        </div>
    )
}