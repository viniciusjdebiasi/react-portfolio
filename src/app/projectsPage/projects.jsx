import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./Projects.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import loginPage from "../../../public/assets/loginPage.png";
import portfolio from "../../../public/assets/portfolio.png";
import todoList from "../../../public/assets/toDoList.png";
import app from "../../../public/assets/appTab.jpeg";
import netflix from "../../../public/assets/netflix.png";

export default function ProjectsPage({ language }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.main} id="projects" data-aos="fade-right">
      <div className={styles.container_main}>
        <div>
          <h2 className={styles.page_title}>{language("headerProjects")}</h2>
          <p className={styles.page_text}>{language("pageDescription")}</p>
        </div>
        <div className={styles.cards_container}>
          <div className={styles.card}>
            <div className={styles.div_img}>
              <Image src={loginPage} className={styles.img_project} />
            </div>

            <section>
              <h3 className={styles.project_title}>
                {language("projectTitle")}
              </h3>
              <div className={styles.technologies}>
                <p className={styles.technologies_html}>HTML</p>
                <p className={styles.technologies_css}>CSS</p>
                <p className={styles.technologies_js}>JAVASCRIPT</p>
                <p className={styles.technologies_react}>REACT</p>
              </div>
              <div>
                <a
                  href="https://logint-page-react.vercel.app/"
                  target="_blank"
                  className={styles.links}
                >
                  {language("seeMoreSite")} &gt;
                </a>
                <a
                  href="https://github.com/viniciusjdebiasi/logintPage-react"
                  target="_blank"
                  className={styles.links}
                >
                  {language("seeMoreGitub")} &gt;
                </a>
              </div>
            </section>
          </div>

          <div className={styles.card}>
            <div className={styles.div_img}>
              <Image src={todoList} className={styles.img_project} />
            </div>
            <section>
              <h3 className={styles.project_title}>
                {language("projectTitle3")}
              </h3>
              <div className={styles.technologies}>
                <p className={styles.technologies_html}>HTML</p>
                <p className={styles.technologies_css}>CSS</p>
                <p className={styles.technologies_js}>JAVASCRIPT</p>
                <p className={styles.technologies_react}>REACT</p>
                <p className={styles.technologies_vite}>VITE</p>
              </div>
              <div>
                <a
                  href="https://to-do-list-react-ruddy-nine.vercel.app/"
                  target="_blank"
                  className={styles.links}
                >
                  {language("seeMoreSite")} &gt;
                </a>
                <a
                  href="https://github.com/viniciusjdebiasi/toDoList-react"
                  target="_blank"
                  className={styles.links}
                >
                  {language("seeMoreGitub")} &gt;
                </a>
              </div>
            </section>
          </div>

          <div className={styles.card}>
            <div className={styles.div_img}>
              <Image src={netflix} className={styles.img_project} />
            </div>
            <section>
              <h3 className={styles.project_title}>
                {language("projectTitle5")}
              </h3>
              <div className={styles.technologies}>
                <p className={styles.technologies_html}>HTML</p>
                <p className={styles.technologies_css}>CSS</p>
                <p className={styles.technologies_js}>JAVASCRIPT</p>
                <p className={styles.technologies_react}>REACT</p>
                <p className={styles.technologies_vite}>VITE</p>
                <p className={styles.technologies_boot}>BOOTSTRAP</p>
              </div>
              <div>
                <a
                  href="https://netflix-page-react.vercel.app/"
                  target="_blank"
                  className={styles.links}
                >
                  {language("seeMoreSite")} &gt;
                </a>
                <a
                  href="https://github.com/viniciusjdebiasi/netflixPage-react"
                  target="_blank"
                  className={styles.links}
                >
                  {language("seeMoreGitub")} &gt;
                </a>
              </div>
            </section>
          </div>

          <div className={styles.card}>
            <div className={styles.div_img}>
              <Image src={app} className={styles.img_project} />
            </div>
            <section>
              <h3 className={styles.project_title}>
                {language("projectTitle4")}
              </h3>
              <div className={styles.technologies}>
                <p className={styles.technologies_css}>CSS</p>
                <p className={styles.technologies_js}>JAVASCRIPT</p>
                <p className={styles.technologies_react}>REACT</p>
                <p className={styles.technologies_reactn}>REACT NATIVE</p>
                <p className={styles.technologies_expo}>EXPO</p>
              </div>
              <div>
                <a
                  href="https://github.com/viniciusjdebiasi/multiplicationTable-reactNative"
                  target="_blank"
                  className={styles.links}
                >
                  {language("seeMoreGitub")} &gt;
                </a>
              </div>
            </section>
          </div>

          <div className={styles.card}>
            <div className={styles.div_img}>
              <Image src={portfolio} className={styles.img_project} />
            </div>
            <section>
              <h3 className={styles.project_title}>
                {language("projectTitle2")}
              </h3>
              <div className={styles.technologies}>
                <p className={styles.technologies_html}>HTML</p>
                <p className={styles.technologies_css}>CSS</p>
                <p className={styles.technologies_js}>JAVASCRIPT</p>
                <p className={styles.technologies_react}>REACT</p>
              </div>
              <div>
                <a
                  href="https://github.com/viniciusjdebiasi/react-portfolio"
                  target="_blank"
                  className={styles.links}
                >
                  {language("seeMoreGitub")} &gt;
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
