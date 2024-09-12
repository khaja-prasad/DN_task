import React from "react";
import operator from "../assets/operator2.png";
import analyst from "../assets/analyst.png";
import executive from "../assets/executive2.png";

const Presentation = ({ presentation }) => {
  return (
    <div className="mt-4" style={{ borderBottom: "1px solid blue" }}>
      <div className="m-2">
        <div className="d-flex">
          <div>
            <img
              src={
                presentation.participant_id === "4"
                  ? operator
                  : presentation.participant_id < 4
                  ? executive
                  : analyst
              }
              alt="User Icon"
              style={{ width: "55px", height: "55px" }}
            />
          </div>
          <div className="px-3">
            <h4>{presentation.participant_name}</h4>
            <p>{`${presentation.participant_designation} | ${presentation.participant_company}`}</p>
          </div>
        </div>
        {presentation.transcript_data.map((para) => (
          <p style={{ textAlign: "justify" }}>{para}</p>
        ))}
      </div>
    </div>
  );
};

export default Presentation;
