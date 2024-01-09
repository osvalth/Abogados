// FaqItem.js
import React from 'react';

const FaqItem = ({ question, answer, isOpen, onClick }) => (
  <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={onClick}>
    <div className="question">{question}</div>
    {isOpen && <div className="answer">{answer}</div>}
  </div>
);

export default FaqItem;
