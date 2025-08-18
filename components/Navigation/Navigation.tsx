"use client";
import { useEffect, useState } from "react";
import styles from "@/styles/Navigation.module.scss";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      className={`${styles.navbar} ${
        scrolled ? styles.solid : styles.transparent
      }`}
    >
      <div className={styles.navContainer}>
        <div className={styles.logo}>GoNewsPlus</div>

        <div
          className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}
        >
          <a href="#" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>

        <div className={styles.navRight}>
          <div className={styles.menuIcon} onClick={toggleMenu}>
            {menuOpen ? (
              <X size={28} fontSize={35} className={styles.icons} />
            ) : (
              <Menu size={35} fontSize={35} className={styles.icons} />
            )}
          </div>
          <button className={styles.loginButton}>Login</button>
        </div>
      </div>
    </header>
  );
}
