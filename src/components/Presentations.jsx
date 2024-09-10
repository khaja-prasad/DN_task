import React from "react";
import Presentation from "./Presentation";

const Presentations = ({ presentations }) => {
  return (
    <div className="d-flex flex-column p-2">
      <div className="text-center" style={{ borderBottom: "3px solid blue" }}>
        <h1>Presentation</h1>
      </div>
      <div>
        {presentations?.map((preset, index) => {
          return (
            <div key={index}>
              <Presentation presentation={preset} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Presentations;
