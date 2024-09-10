import React from "react";
import Question from "./Question";

const QuestionAnswers = ({ questions }) => {
  return (
    <div className="d-flex flex-column px-3 py-2">
      <div className="text-center" style={{ borderBottom: "3px solid blue" }}>
        <h1>Questions And Answers</h1>
      </div>
      <div>
        {questions?.map((preset, index) => {
          return (
            <div key={index}>
              <Question question={preset} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionAnswers;
