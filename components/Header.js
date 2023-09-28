import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/slack_profile_picture-1.jpg";
import Button from "./Button";
import styles, { navMenu, active, navLinks } from "./Header.module.css";

function Header() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", showButton);

    return () => {
      window.removeEventListener("resize", showButton);
    };
  }, []);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <Link href="/" className={styles.navbarLogo}>
            <Image className={styles.logo} src={logo} alt="" width="20" />
            <span>Michael Oyedepo</span>
          </Link>
          <div className="menuIcon">
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
            <ul className={click ? "navMenu, active" : "navMenu"}>
              <li className="navItem">
                <Link href="/" className="navLinks" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/" className="navLinks" onClick={closeMobileMenu}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/" className="navLinks" onClick={closeMobileMenu}>
                  Projects
                </Link>
              </li>
            </ul>
            {button && (
              <Button type="button" buttonStyle="btn--outline">
                RESUME
              </Button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
