"use client";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  activePage?: string; 
}

export default function Header({ activePage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className={styles.headerContainer}>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="https://f3be96abaf.clvaw-cdnwnd.com/5a350eb63bf4ac83e4b528bf9ebebca6/200000055-855ca855cc/logo%20mobiltaxi.png?ph=f3be96abaf"
              alt="Logo Mobil Taxi"
              width="58"
              height="58"
            />
          </Link>
          <p className={styles.title}>Mobil Taxi Jablonec nad Nisou</p>
        </div>
        <nav className={styles.nav}>
          {/* Desktop Nav */}
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link
                href="/"
                className={activePage === "/" ? styles.active : ""}
              >
                Úvod
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href="/onas"
                className={activePage === "/onas" ? styles.active : ""}
              >
                O nás
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                href="/sluzby"
                className={activePage === "/sluzby" ? styles.active : ""}
              >
                Služby
              </Link>
            </li>
          </ul>

          {/* Hamburger Icon */}
          <div
            className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
            onClick={toggleMenu}
          >
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.menuOpen : ""}`}>
        <ul className={styles.mobileList}>
          <li>
            <Link
              href="/"
              className={activePage === "/" ? styles.active : ""}
              onClick={() => setIsOpen(false)}
            >
              Úvod
            </Link>
          </li>
          <li>
            <Link
              href="/onas"
              className={activePage === "/onas" ? styles.active : ""}
              onClick={() => setIsOpen(false)}
            >
              O nás
            </Link>
          </li>
          <li>
            <Link
              href="/sluzby"
              className={activePage === "/sluzby" ? styles.active : ""}
              onClick={() => setIsOpen(false)}
            >
              Služby
            </Link>
          </li>
        </ul>

        <div className={styles.separator}></div>

        <a href="tel:+420723104060" className={styles.mobilePhone}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          +420 723 104 060
        </a>
      </div>
    </div>
  );
}
