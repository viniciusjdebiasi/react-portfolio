'use client'
import React from "react";

import { useTranslation } from "react-i18next";
import i18n from "./i18n";

import styles from "./page.module.css";

import Header from "@/components/header/header";
import HomePage from "./homePage/home";
import AboutPage from "./aboutPage/about";
//import CertificatesPage from "./certificatesPage/certificates";
import ProjectsPage from "./projectsPage/projects";

export default function Home() {

  const { t, i18n } = useTranslation()
  const changeLanguage = (lng) => { i18n.changeLanguage(lng) }

  return (

    <main className={styles.main}>
      <Header changeLanguageButton={changeLanguage} language={t} navigationAbout={'#about'} navigationProject={'#projects'}  />
      <HomePage language={t}  />
      <AboutPage language={t} />
      {/* <CertificatesPage language={t} /> */}
      <ProjectsPage language={t} />
    </main>
  );
}