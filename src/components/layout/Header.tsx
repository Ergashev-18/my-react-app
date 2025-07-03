import React from 'react';
import styles from '/src/assets/styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.header__logo}>Jobly</a>
      <nav className={styles.header__nav}>
        <ul className={styles.header__list}>
          <li><button type="button" className={styles.header__recruiters}>For Recruiters</button></li>
          <li><button type="button" className={styles.header__signup}>Sign Up</button></li>
          <li><button type="button" className={styles.header__login} data-modal="open">Log in</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;