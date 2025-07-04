// src/components/CardList/CardList.tsx
import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';

interface CardItem {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
}

const CardList: React.FC = () => {
  const [cards, setCards] = useState<CardItem[]>([]);

  useEffect(() => {
    // Твой текст здесь
    const data: CardItem[] = [
      {
        id: 1,
        title: 'Профессиональный профиль',
        subtitle:
          'Мы знаем, что поиск подходящей работы — это стресс, поэтому мы упростили этот процесс. Это займет всего несколько минут. Создайте бесплатное портфолио на briefolio, чтобы показать себя с лучшей стороны и вас заметит рекрутер.',
        icon: '/images/rast.png',
      },
      {
        id: 2,
        title: 'Лучшее портфолио',
        subtitle:
          'Мы знаем, что поиск подходящей работы — это стресс, поэтому мы упростили этот процесс. Это займет всего несколько минут. Создайте бесплатное портфолио на briefolio, чтобы показать себя с лучшей стороны и вас заметит рекрутер.',
        icon: '/images/rast2.png',
      },
      {
        id: 3,
        title: 'Мощное резюме',
        subtitle:
          'Мы знаем, что поиск подходящей работы — это стресс, поэтому мы упростили этот процесс. Это займет всего несколько минут. Создайте бесплатное портфолио на briefolio, чтобы показать себя с лучшей стороны и вас заметит рекрутер.',
        icon: '/images/rast2.png',
      },
    ];

    // Добавляем данные в стейт
    setCards(data);
  }, []);

  return (
    <div className="about__list">
      {cards.map((card) => (
        <Card
          key={card.id}
          icon={card.icon}
          title={card.title}
          subtitle={card.subtitle}
        />
      ))}
    </div>
  );
};

export default CardList;