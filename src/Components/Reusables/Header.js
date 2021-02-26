import React from 'react'
import {
  Link
} from "react-router-dom";
import styles from '../Reusables/Header.module.css'

export default function Header() {
  return (
    <div>
      <nav className={styles.headerContainer}>
        <div className={styles.logo}>
          {/* <img src={ } /> */}
        TESTIMONIALS
        </div>
        <ul className={styles.link}>
            <Link className={styles.linkli} to="/">Home</Link>
            <Link className={styles.linkli} to="/pricing">Pricing</Link>
            <Link className={styles.linkli} to="/about">About</Link>
        </ul>

        <button className={styles.buttonHeader}>
          Login/Register
        </button>
      </nav>
    </div>
  )
}
