import React from "react";
import { Answers } from "../utils/api";
export type QuestionCardTypes = {
  totalQuestions: number;
  question: Answers;
};

const QuestionCard = ({ totalQuestions, question }: QuestionCardTypes) => {
  return <div>
    
    <p>{question.question}</p>
    {/* <button dangerouslySetInnerHTML={{__html: question.correct_answer}}>{question.correct_answer}</button> */}
  </div>;
};

export default QuestionCard;
