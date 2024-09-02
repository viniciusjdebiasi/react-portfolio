'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import PT from '../../../public/assets/brasil.png';
import IT from '../../../public/assets/italia.png';
import EN from '../../../public/assets/rn.png';
import Hamburguer from '../../../public/assets/hamburguer.png'

export default function Header({ changeLanguageButton, language, navigationAbout, navigationProject }) {

    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => { setIsOpen(!isOpen) }
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(true)
            } else {
                setIsOpen(false)
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <nav className={styles.main}>
            <div className={styles.container_header} >
                <div>
                    <button className={styles.hamburguer_button} onClick={toggleMenu} >
                        <Image src={Hamburguer} alt='Hamburger' className={styles.hamburguer_img} />
                    </button>

                    <ul className={`${styles.container_links} ${isOpen ? styles.openMenu : ''}`}>
                        <li><a href={navigationAbout} className={styles.button_page} >{language('headerAbout')}</a></li>
                        <li><a href={navigationProject} className={styles.button_page} >{language('headerProjects')}</a></li>
                        {/*  <li><a href={navigation} className={styles.button_page} >{language('headerCertifications')}</a></li> JSX */}
                    </ul>
                </div>

                <div className={styles.container_button_language}>
                    <button onClick={() => changeLanguageButton('en')} className={styles.language_button} > <Image src={EN} alt={language('headerFlagUnitedKingdom')} className={styles.language_image} /> </button>
                    <button onClick={() => changeLanguageButton('it')} className={styles.language_button} > <Image src={IT} alt={language('headerFlagItaly')} className={styles.language_image} /> </button>
                    <button onClick={() => changeLanguageButton('pt')} className={styles.language_button} > <Image src={PT} alt={language('headerFlagBrazil')} className={styles.language_image} /> </button>
                </div>
            </div>
        </nav>
    )
}