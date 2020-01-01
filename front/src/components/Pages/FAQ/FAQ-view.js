import React from 'react';

import './FAQ.scss';

const FAQView = ({ translations, faq }) => (
  <div className="mt-4">
    {faq.map((questions) => (
      <div className="flex flex-col mb-6">
        <h1 className="text-black text-center text-2xl font-bold">{questions.question}</h1>
        <p className="answer bg-gray-300">{questions.answer}</p>
        <hr className="self-center border-black mt-12 w-64"/>
      </div>
    ))}
  </div>
);

export default FAQView;
