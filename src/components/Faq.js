// components/faq.js
import React from 'react';
import styles from './faq.module.css';

const Faq = props => {
  const { question, answer, author = {}, date } = props;
  const { image, name } = author;

  return (
    <section className={styles.faq}>
      <h2 className={styles['faq-question']}>{question}</h2>
      <p className={styles['faq-answer']}>{answer}</p>
      <section className={styles['faq-details']}>
        <img src={image} alt="user" className={styles['faq-author-image']} />
        <div>
          <div className={styles['faq-author-name']}>{name}</div>
          <div className={styles['faq-date']}>{date}</div>
        </div>
      </section>
    </section>
  );
};

export default Faq;