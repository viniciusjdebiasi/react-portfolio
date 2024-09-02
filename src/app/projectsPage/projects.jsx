import Image from 'next/image';
import styles from './Projects.module.css';

import loginPage from '../../../public/assets/loginPage.png';
import portfolio from '../../../public/assets/portfolio.png';

export default function ProjectsPage({ language }) {

    return (
        <div className={styles.main} id='projects'>
            <div className={styles.container_main}>
                <div>
                    <h2 className={styles.page_title}>{language('headerProjects')}</h2>
                    <p className={styles.page_text}>{language('pageDescription')}</p>
                </div>
                <div className={styles.cards_container}>
                    <div className={styles.card}>
                        <Image src={loginPage} className={styles.img_project} />
                        <section>
                            <h3 className={styles.project_title}>{language('projectTitle')}</h3>
                            <div className={styles.technologies}>
                                <p className={styles.technologies_html}>HTML</p>
                                <p className={styles.technologies_css}>CSS</p>
                                <p className={styles.technologies_js}>JAVASCRIPT</p>
                                <p className={styles.technologies_react}>REACT</p>
                            </div>
                            <div>
                                <a href="https://logint-page-react.vercel.app/" target='_blank' className={styles.links}>{language('seeMoreSite')} &gt;</a>
                                <a href="https://github.com/viniciusjdebiasi/logintPage-react" target='_blank' className={styles.links}>{language('seeMoreGitub')} &gt;</a>
                            </div>
                        </section>
                    </div>

                    <div className={styles.card}>
                        <Image src={portfolio} className={styles.img_project} />
                        <section>
                            <h3 className={styles.project_title}>{language('projectTitle2')}</h3>
                            <div className={styles.technologies}>
                                <p className={styles.technologies_html}>HTML</p>
                                <p className={styles.technologies_css}>CSS</p>
                                <p className={styles.technologies_js}>JAVASCRIPT</p>
                                <p className={styles.technologies_react}>REACT</p>
                            </div>
                            <div>
                                <a href="https://react-portfolio-nine-wine.vercel.app/" target='_blank' className={styles.links}>{language('seeMoreSite')} &gt;</a>
                                <a href="https://github.com/viniciusjdebiasi/react-portfolio" target='_blank' className={styles.links}>{language('seeMoreGitub')} &gt;</a>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}