import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <header id="header" className={styles.header}>
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

        
      </header>
    </main>
  );
}