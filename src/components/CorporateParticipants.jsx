import React from "react";
import Executive from "./Executive";

const CorporateParticipants = ({ executives }) => {
  return (
    <div className="d-flex flex-column p-2">
      <div className="text-center" style={{ borderBottom: "3px solid blue" }}>
        <h1>Corporate Participants</h1>
      </div>
      <div>
        {executives?.map((preset, index) => {
          return (
            <div key={index}>
              <Executive executive={preset} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CorporateParticipants;
