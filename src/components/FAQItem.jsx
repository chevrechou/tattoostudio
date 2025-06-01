import React from "react";
import "./../styles/FAQItem.css";

export default function FAQItem({ question, answer }) {
  return (
    <div className="faq-item">
      <h4>{question}</h4>
      <p>{answer}</p>
    </div>
  );
}
