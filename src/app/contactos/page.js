import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', textAlign: 'center', width: '100%' }} />
      <div className={styles.backgroundImage}>
        <Image src="/fondo.jpg" layout="fill" objectFit="cover" />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <header id="header" className={styles.header}>
          <img
            src="mc.png"
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
                  <span>Phone:</span> 555-1234
                </li>
                <li>
                  <span>Email:</span> contacto@saborEsquina.com
                </li>
                <li>
                  <span>Facebook:</span> esquinasabor
                </li>
                <li>
                  <span>Instagram:</span> esquinasabor
                </li>
                <li>
                  <span>Twitter:</span> esquinasabor
                </li>
                <li>
                  <span>Dirección:</span> Av. Principal 123, Ciudad, País
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    </main>
  );
}