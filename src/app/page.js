import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main>
      <div className={styles.backgroundImage}>
        <Image src="/fondo.jpg" layout="fill" objectFit="cover" />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <header id="header" className={styles.header}>
          <div>
            <h1>
              <span>
                La<span className={styles.yellowText}>Esquina</span>
              </span>
              <br />
              <span>
              Del <span className={styles.yellowText}>Sabor</span>
              </span>
              <br />
            </h1>
          </div>
        </header>
        <Navbar style={{ position: 'relative', bottom: 0, left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }} />
      </div>
    </main>
  );
}