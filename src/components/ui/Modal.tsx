import React, { useState } from 'react';
import styles from './Modal.module.css';

// Типы для формы
type ModalType = 'login' | 'signup';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin?: (username: string) => void;
  onSignup?: (nickname: string) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onLogin = () => {}, onSignup = () => {} }) => {
  const [activeTab, setActiveTab] = useState<ModalType>('login');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      onLogin(username);
    } else {
      alert('Введите имя пользователя и пароль');
    }
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && email && password) {
      onSignup(username);
    } else {
      alert('Заполните все поля');
    }
  };

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <span className={styles.close} onClick={onClose}>&times;</span>

        {/* Переключение вкладок */}
        <div className={styles.tabs}>
          <button
            type="button"
            className={activeTab === 'login' ? styles.active : ''}
            onClick={() => setActiveTab('login')}
          >
            Войти
          </button>
          |
          <button
            type="button"
            className={activeTab === 'signup' ? styles.active : ''}
            onClick={() => setActiveTab('signup')}
          >
            Регистрация
          </button>
        </div>

        {/* Форма "Вход" */}
        {activeTab === 'login' && (
          <form onSubmit={handleLoginSubmit}>
            <h2>Вход</h2>
            <input
              type="text"
              placeholder="Имя пользователя"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className={styles.modalButtons}>
              <button className={styles.buttonokno} type="submit">
                Войти
              </button>
              <button className={`${styles.buttonokno} ${styles.cancel}`} type="button" onClick={onClose}>
                Отмена
              </button>
            </div>
          </form>
        )}

        {/* Форма "Регистрация" */}
        {activeTab === 'signup' && (
          <form onSubmit={handleSignupSubmit}>
            <h2>Регистрация</h2>
            <input
              type="text"
              placeholder="Имя пользователя"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className={styles.modalButtons}>
              <button className={styles.buttonokno} type="submit">
                Зарегистрироваться
              </button>
              <button className={`${styles.buttonokno} ${styles.cancel}`} type="button" onClick={onClose}>
                Отмена
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Modal;