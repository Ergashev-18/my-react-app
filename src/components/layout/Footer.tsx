import React from 'react';
import styles from '../../assets/styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <a className={styles.footer__logo}>Jobly.co</a>
        <p className={styles.footer__title}>We support a pool of diverse young creatives and engineers.</p>
      </div>
      <div className={styles.footer__holder}>
        <p className={styles.footer__copy}>© 2023 Jobly.co Copyright and All rights reserved.</p>
        <p className={styles.footer__copyright}>Terms and Conditions · Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
