// src/components/Card/Card.tsx
import React from 'react';
import styles from '../../assets/styles//Card.module.css';

interface CardProps {
  icon: string;
  title: string;
  subtitle: string;
}

const Card: React.FC<CardProps> = ({ icon, title, subtitle }) => {
  return (
    <p className={styles.about__item}>
      <img className={styles.about__icon} src={icon} alt={title} />
      <h3 className={styles.about__title}>{title}</h3>
      <p className={styles.about__subtitle}>{subtitle}</p>
    </p>
  );
};

export default Card;