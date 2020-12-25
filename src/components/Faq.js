// // components/faq.js
// import React from 'react';
// // import styles from './faq.module.css';
// import './faq.scss';
// import styled from '@emotion/styled';

// /* Using css modules */
// // const Faq = props => {
// //   const { question, answer, author = {}, date } = props;
// //   const { image, name } = author;

// //   return (
// //     <section className={styles.faq}>
// //       <h2 className={styles['faq-question']}>{question}</h2>
// //       <p className={styles['faq-answer']}>{answer}</p>
// //       <section className={styles['faq-details']}>
// //         <img src={image} alt="user" className={styles['faq-author-image']} />
// //         <div>
// //           <div className={styles['faq-author-name']}>{name}</div>
// //           <div className={styles['faq-date']}>{date}</div>
// //         </div>
// //       </section>
// //     </section>
// //   );

// const Faq = (props) => {
//     const { question, answer, author = {}, date } = props;
//     const { image, name } = author;
  
//     return (
//       <section className="faq">
//         <h2 className="faq-question">{question}</h2>
//         <p className="faq-answer">{answer}</p>
//         <section className="faq-details">
//           <img src={image} alt="user" className="faq-author-image" />
//           <div>
//             <div className="faq-author-name">{name}</div>
//             <div className="faq-date">{date}</div>
//           </div>
//         </section>
//       </section>
//     );
//   };

// export default Faq;

/* using emotion */

import React from 'react';
import styled from '@emotion/styled';

const FaqSecion = styled.section`
  padding: 48px;
  border: 1px solid #e7e9f3;
  border-radius: 24px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(117, 131, 253, 0.09);
  transition: transform 350ms ease, box-shadow 350ms ease, color 300ms ease, -webkit-transform
      350ms ease;
  text-decoration: none;
`;
const FaqQuestion = styled.h2`
  color: #354fe7;
  margin-bottom: 8px;
  font-size: 22px;
  line-height: 30px;
  font-weight: bold;
  transition: color 300ms ease;
`;
const FaqAnswer = styled.p`
  color: #65687d;
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 28px;
`;
const FaqDate = styled.div`
  color: ___CSS_0___;
  margin-bottom: 0px;
  font-size: 16px;
  line-height: 18px;
`;
const FaqDetails = styled.section`
  display: flex;
  align-items: center;
`;
const FaqAuthorImage = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 16px;
  border-radius: 50%;
`;
const FaqAuthorName = styled.div`
  color: #222433;
  margin-bottom: 8px;
  font-size: 18px;
  line-height: 18px;
  font-weight: bold;
`;

const FAQ = props => {
  const { question, answer, author = {}, date } = props;
  const { image, name } = author;

  return (
    <FaqSecion>
      <FaqQuestion>{question}</FaqQuestion>
      <FaqAnswer>{answer}</FaqAnswer>
      <FaqDetails>
        <FaqAuthorImage src={image} alt="user" />
        <div>
          <FaqAuthorName>{name}</FaqAuthorName>
          <FaqDate color="#65687d">{date}</FaqDate>
        </div>
      </FaqDetails>
    </FaqSecion>
  );
};

export default FAQ;