import React from "react";

const Executive = ({ executive }) => {
  console.log(executive.id);
  return (
    <div className="m-2 mt-5 px-2">
      <h4>{executive.name}</h4>
      <p style={{ margin: "0" }}>
        {`${executive.designation} | ${executive.company}`}
      </p>
    </div>
  );
};

export default Executive;
