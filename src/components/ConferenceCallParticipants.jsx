import React from "react";
import Analyst from "./Analyst";

const ConferenceCallParticipants = ({ analysts }) => {
  return (
    <div className="d-flex flex-column p-2">
      <div className="text-center" style={{ borderBottom: "3px solid blue" }}>
        <h1>Conference Call Participants</h1>
      </div>
      <div className="d-flex" style={{ flexWrap: "wrap" }}>
        {analysts?.map((preset, index) => {
          return (
            <div key={index} style={{ width: "50%" }}>
              <Analyst analyst={preset} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConferenceCallParticipants;
