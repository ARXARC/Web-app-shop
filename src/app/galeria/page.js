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
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <img src="1.png" alt="Imagen 1" style={{ width: '400px', height: '400px' }} />
              <img src="2.png" alt="Imagen 2" style={{ width: '400px', height: '400px' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <img src="3.png" alt="Imagen 3" style={{ width: '400px', height: '400px' }} />
              <img src="4.png" alt="Imagen 4" style={{ width: '400px', height: '400px' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <img src="5.png" alt="Imagen 5" style={{ width: '400px', height: '400px' }} />
              <img src="6.png" alt="Imagen 6" style={{ width: '400px', height: '400px' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <img src="7.png" alt="Imagen 7" style={{ width: '400px', height: '400px' }} />
              <img src="8.png" alt="Imagen 8" style={{ width: '400px', height: '400px' }} />
            </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <img src="9.png" alt="Imagen 9" style={{ width: '400px', height: '400px' }} />
              <img src="10.png" alt="Imagen 10" style={{ width: '400px', height: '400px' }} />
            
          </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <img src="1.png" alt="Imagen 1" style={{ width: '400px', height: '400px' }} />
              <img src="2.png" alt="Imagen 2" style={{ width: '400px', height: '400px' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <img src="3.png" alt="Imagen 3" style={{ width: '400px', height: '400px' }} />
              <img src="4.png" alt="Imagen 4" style={{ width: '400px', height: '400px' }} />
            </div>
            </div>
        </header>
      </div>
    </main>
  );
}