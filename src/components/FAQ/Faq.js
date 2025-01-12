import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is ElectroVault?",
      answer:
        "ElectroVault is your one-stop shop for all your electronic needs, offering a wide range of high-quality gadgets, appliances, and accessories at competitive prices.",
    },
    {
      question: "How do I place an order?",
      answer:
        "Browse our catalog, add items to your cart, and proceed to checkout. You can create an account for faster future orders or check out as a guest.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept a variety of payment methods, including credit/debit cards, bank transfers, and secure online payment platforms like Paystack.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery typically takes 3–7 business days, depending on your location. Expedited shipping options are also available at checkout.",
    },
    {
      question: "What is your return policy?",
      answer:
        "You can return items within 14 days of delivery as long as they are in their original condition and packaging. Please refer to our Return Policy page for detailed instructions.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach us via email at support@myelectrovault.com or through our Contact Us page. We’re here to help!",
    },
  ];

  return (
    <div className="faq-page">
      <div className="container">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <p className="faq-intro">
          Got questions? We’ve got answers! Here are some of the most frequently
          asked questions about <strong>ElectroVault</strong>. If you can’t find
          what you’re looking for, feel free to{" "}
          <a href="/contact">contact us</a>.
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div
                className={`faq-question ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="faq-icon">
                  {activeIndex === index ? "–" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
