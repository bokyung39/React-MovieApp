import React from "react";
import { Link } from "react-router-dom";
import styles from "../Home.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <h1>MOVIE COLLECTION</h1>
    </header>
  );
}

export default Header;
