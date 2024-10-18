import React, { useState } from "react";
import QUESTIONS from "../questions";

function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);

  const activeQuestionIndex = userAnswer.length;
  const shuffledAnswers = QUESTIONS[activeQuestionIndex].answers.sort(
    () => Math.random() - 0.5
  );

  const handleAnswerClick = (answer) => {
    setUserAnswer((prev) => [...prev, answer]);
  };

  return (
    <div id='quiz'>
      <div id='question'>
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id='answers'>
          {shuffledAnswers.map((option, index) => (
            <li key={index} className='answer'>
              <button onClick={() => handleAnswerClick(option)}>
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Quiz;
