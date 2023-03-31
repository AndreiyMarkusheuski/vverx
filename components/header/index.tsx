// "use client";

import Navbar from "../navbar";
import styles from "./style.module.scss"

const Header = () => (
  <header className={styles.header}>
    <Navbar />
  </header>
);

export default Header;