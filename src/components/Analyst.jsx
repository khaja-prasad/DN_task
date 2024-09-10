import React from "react";

const Analyst = ({ analyst }) => {
  //   console.log(executive.id);
  return (
    <div className="m-2 mt-4 px-2" style={{ margin: "15px 20px" }}>
      <h4>{analyst.name}</h4>
      <p style={{ margin: "0" }}>
        {`${analyst.designation} | ${analyst.company}`}
      </p>
    </div>
  );
};

export default Analyst;
