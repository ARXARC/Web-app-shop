import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <main>
      <div className={styles.backgroundImage}>
        <Image src="/fondo.jpg" layout="fill" objectFit="cover" />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <header id="header" className={styles.header}>
          <img
            src="fondo.jpg"
            alt="Imagen"
            className={styles.image}
          />
          <div className={styles.infoContainer}>
            <span className={styles.title + " " + styles.yellowText}></span>
            <br />
            <span className={styles.title}></span>
            <div className={styles.list}>
              <ul>

                <li>
                  <span className={styles.grayText}>Phone:</span> 12345678
                </li>
                <li>
                  <span className={styles.grayText}>Email:</span> saborEsquina@google.com
                </li>
                <li>
                  <span className={styles.grayText}>Facebook:</span> esquinasabor
                </li>
              </ul>
            </div>
          </div>
        </header>
        <Navbar style={{ position: 'relative', bottom: 0, left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }} />
      </div>
    </main>
  );
}