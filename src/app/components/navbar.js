"use client"

import React, { useState } from "react"
import styles from './navbar.module.css';

function Navbar() {
    const [selectedItem, setSelectedItem] = useState('inicio')

    const handleItemClick = (item, id) => {
        setSelectedItem(item);
        scrollToSection(id);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={styles.navbar }>
            <div
                className={styles.navbarItem + ` ${selectedItem === 'Inicio' ? styles.selected : ' '}`}
                onClick={() => handleItemClick('Inicio', 'header')}

            >

                <a href="http://localhost:3000/">Inicio</a>
            </div>
            <div
                className={styles.navbarItem + ` ${selectedItem === 'Skills' ? styles.selected : ' '}`}
                onClick={() => handleItemClick('Skills', 'info')}
            >
                <a href="http://localhost:3000/contactos">Contactos</a>
            </div>
            <div
                className={styles.navbarItem + ` ${selectedItem === 'Skills' ? styles.selected : ' '}`}
                onClick={() => handleItemClick('Skills', 'info')}
            >
                <a href="http://localhost:3000/galeria">Galeria</a>
            </div>
        </nav>
    );
}

export default Navbar;