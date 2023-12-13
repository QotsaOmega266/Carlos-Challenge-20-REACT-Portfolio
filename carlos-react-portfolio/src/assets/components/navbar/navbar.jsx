import React, {useState} from "react";

import styles from "./navbar.module.css";
import {getImageUrl} from "../../utils/getImageUrl";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return <nav className={StyleSheet.navbar}>
        <a className={styles.title} href="/">
            Portfolio
        </a>
        <div className={styles.menu}>
            <img className={styles.menuButton} 
            src={getImageUrl("nav/menuIcon.png")}
            alt="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}/>
            <ul className={`${styles.menuSelections} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                </ul> 
                </div>
    </nav>;
};