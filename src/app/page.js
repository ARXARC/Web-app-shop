import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <header id="header" className={styles.header}>
        <div>
          <h1>
            <span>
              Hello<span className={styles.yellowText}>.</span>
            </span>
            <br />
            <span>
              <span>I am</span>
            </span>
            <br />
            <span>Maxcimiliano Morales</span>
          </h1>
        </div>
      </header>
      <section id="info" className={styles.infoSection}>
        <img
          src="imagen-para-website.jpg"
          alt="Imagen"
          className={styles.image}
        />
        <div className={styles.infoContainer}>
          <span className={styles.title + "" + styles.yellowText}>Maxcimiliano</span>
          <br />
          <span className={styles.title}> Morales</span>
          <div className={styles.list}>
            <ul>
              <li>
                <span className={styles.grayText} >age:</span> 16
              </li>
              <li>
                <span className={styles.grayText} >Nationality:</span> Guatemalteco</li>
              <li>
                <span className={styles.grayText} >Skill set:</span> Project Management and Financial Performance</li>
              <li>
                <span className={styles.grayText} >Langages:</span> English, German and spanish</li>

            </ul>
          </div>
        </div>

      </section>

      <section id="info" className={styles.infosection}>
        <img src="bat.jpg" alt="Imagen" className={styles.image} />
        <img src="fuerte.jpg" alt="Imagen" className={styles.image} />
        <img src="guerra.webp" alt="Imagen" className={styles.image} />
      </section>
    </main>
  );
}