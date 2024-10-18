import React, { useState } from "react";
import QUESTIONS from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";

function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);

  const activeQuestionIndex = userAnswer.length;

  const quizIsFinished = userAnswer.length === QUESTIONS.length;

  const handleAnswerClick = (answer) => {
    setUserAnswer((prev) => [...prev, answer]);
  };

  if (quizIsFinished) {
    return (
      <div id='summary'>
        <img src={quizCompleteImg} alt='Tr Complete' />
        <h2>Quiz Completed!</h2>
        <p>
          Your score is {userAnswer.length} out of {QUESTIONS.length}
        </p>
      </div>
    );
  }

  const shuffledAnswers = QUESTIONS[activeQuestionIndex].answers.sort(
    () => Math.random() - 0.5
  );

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
