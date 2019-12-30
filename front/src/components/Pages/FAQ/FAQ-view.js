import React from 'react';

import './FAQ.scss';

const FAQView = ({ translations, faq }) => (
  faq.map((questions) => (
     <div className="container-fluid flex flex-col pb-6 w-full">
      <h1 className="text-black text-center text-2xl font-bold">{questions.question}</h1>
      <p className="answer bg-gray-300">{questions.answer}</p>
      <hr className="self-center border-black mt-12 w-64"/>
    </div>
  ))

);

export default FAQView;
