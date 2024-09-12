import React from "react";
import operator from "../assets/operator2.png";
import analyst from "../assets/analyst.png";
import executive from "../assets/executive2.png";

const Question = ({ question }) => {
  console.log(question.participant_id);
  return (
    <div className="" style={{ borderBottom: "1px solid blue" }}>
      <div className="m-2">
        <div className="d-flex mt-4">
          <div>
            <img
              src={
                question.participant_id < 5 && question.participant_id > 3
                  ? operator
                  : question.participant_id < 4
                  ? executive
                  : analyst
              }
              alt="User Icon"
              style={{ width: "55px", height: "55px" }}
            />
          </div>
          <div className="px-2">
            <h4>{question.participant_name}</h4>
            <p style={{ margin: "0" }}>
              {question.participant_name === "Operator"
                ? ""
                : `${question.designation} | ${question.company}`}
            </p>
          </div>
        </div>
        <p style={{ textAlign: "justify", marginTop: "12px" }}>
          {question.transcript_data}
        </p>
      </div>
    </div>
  );
};

export default Question;
