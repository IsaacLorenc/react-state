import React, { useState } from 'react';

const EightBall = ({ answers }) => {
  const [message, setMessage] = useState('Think of a Question');
  const [color, setColor] = useState('black');

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomIndex];
    setMessage(randomAnswer.msg);
    setColor(randomAnswer.color);
  };
  return (
    <div>
      <div
        className="eight-ball"
        onClick={handleClick}
        style={{ backgroundColor: color }}
      >
        {message}
      </div>
   
    </div>
  );
};

export default EightBall;