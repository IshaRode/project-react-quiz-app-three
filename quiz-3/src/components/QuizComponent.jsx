import { useState } from "react";
import questions from "../resources/quizQuestion.json";
import { useNavigate } from "react-router-dom";

function QuizComponent() {
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState([]);
  const navigate = useNavigate();

  const handleNext = () => {
    if (number < 14) {
      setNumber(number + 1);
    }
  };

  const handlePrev = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  const handleOptionClick = (e) => {
    if (e.target.innerText === questions[number].answer) {
      alert("Correct answer! 🥳");
      if (!attempted.includes(number)) {
        setAttempted((prevAttempted) => [...prevAttempted, number]);
        setScore((prevScore) => prevScore + 1);
      }
    } else {
      alert("Wrong answer! 😔");
      if (!attempted.includes(number)) {
        setAttempted((prevAttempted) => [...prevAttempted, number]);
      }
    }

    setTimeout(() => {
      handleNext();
    }, 0);
  };

  const handleFinish = () => {
    navigate("/Result", { state: { score, attempted } });
  };

  const handleQuit = () => {
    if (window.confirm("Are you sure you want to quit?")) {
      window.location.reload(false);
    }
  };

  return (
    <div className="container">
      <div className="quiz">
        <h2 className="question">Question</h2>
        <div className="fifteen">
          <p>{number + 1} of 15</p>
        </div>
        <p className="mammal">{questions[number].question}</p>
        <div className="options">
          <button className="opt" onClick={handleOptionClick}>
            {questions[number].optionA}
          </button>
          <button className="opt" onClick={handleOptionClick}>
            {questions[number].optionB}
          </button>
          <button className="opt" onClick={handleOptionClick}>
            {questions[number].optionC}
          </button>
          <button className="opt" onClick={handleOptionClick}>
            {questions[number].optionD}
          </button>
        </div>
        <div className="next-buttons">
          <button className="previous" onClick={handlePrev}>
            Previous
          </button>
          <button className="next" onClick={handleNext}>
            Next
          </button>
          <button className="quit" onClick={handleQuit}>
            Quit
          </button>
          <button className="finish" onClick={handleFinish}>
            Finish
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizComponent;
