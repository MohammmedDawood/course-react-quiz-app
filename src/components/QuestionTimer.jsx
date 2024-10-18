import React, { useState, useEffect } from "react";

function QuestionTimer({ timeOut, onTimeOut }) {
  const [timeRemaining, setTimeRemaining] = useState(timeOut);

  useEffect(() => {
    setTimeout(onTimeOut, timeOut);
  }, [timeOut, onTimeOut]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prev) => prev - 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return <progress id='question-time' value={timeRemaining} max={timeOut} />;
}

export default QuestionTimer;
