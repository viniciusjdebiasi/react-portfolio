'use client'
import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import Image from 'next/image';
import styles from "./page.module.css";
import Up from '../../public/assets/up.png';
import Header from "@/components/header/header";
import HomePage from "./homePage/home";
import AboutPage from "./aboutPage/about";
//import CertificatesPage from "./certificatesPage/certificates";
import ProjectsPage from "./projectsPage/projects";
import ContactPage from './contactPage/contact';

export default function Home() {

  const { t, i18n } = useTranslation()
  const changeLanguage = (lng) => { i18n.changeLanguage(lng) }

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Função para monitorar a rolagem da página
    const handleScroll = () => {
      if (window.pageYOffset > 300) { // Exibe o botão após rolar 300px
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Adiciona o event listener na rolagem
    window.addEventListener('scroll', handleScroll);

    // Limpa o event listener ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Função para rolar até o topo da página
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className={styles.main}>
      {showButton && (
        <div className={styles.button_container}>
          <button onClick={scrollToTop} className={styles.buttonUp} >
            <svg className={styles.up} width="41" height="41" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.25 10.25 12 4.75l-5.25 5.5"></path>
              <path d="M12 19.25V5.75"></path>
            </svg>
          </button>
        </div>
      )}

      <Header changeLanguageButton={changeLanguage} language={t} navigationAbout={'#about'} navigationProject={'#projects'} navigationContact={'#contact'} />
      <HomePage language={t} />
      <AboutPage language={t} />
      {/* <CertificatesPage language={t} /> */}
      <ProjectsPage language={t} />
      <ContactPage language={t} />
    </main>
  );
}