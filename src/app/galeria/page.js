import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <header id="header" className={styles.header}>
      <img src="bat.jpg" alt="Imagen" className={styles.image} />
        <img src="fuerte.jpg" alt="Imagen" className={styles.image} />
        <img src="guerra.webp" alt="Imagen" className={styles.image} />
      </header>
    </main>
  );
}