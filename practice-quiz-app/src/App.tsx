import React, { useState } from "react";
import "./App.css";
import QuestionCard from "./components/QuestionCard";
import { fetchedData, DIFFICULTY, Answers, TOTAL_QUESTION } from "./utils/api";

function App() {
  const [data, setData] = useState<Answers[]>([]);
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [gameOver, setGameOver] = useState(true);

  const startQuiz = async () => {
    setLoading(true);
    const data = await fetchedData(10, DIFFICULTY.MEDIUM);
    setData(data);
    setLoading(false);
    setGameOver(false);
    setScore(0);
    setAnswers([]);
  };

  return (
    <div className="App">
      <button onClick={startQuiz}>Start</button>
      {
        !gameOver && !loading ? <QuestionCard totalQuestions={TOTAL_QUESTION} question={data[number]}/> : null
      }
    </div>
  );
}

export default App;
