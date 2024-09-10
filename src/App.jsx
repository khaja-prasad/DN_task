import React, { useEffect, useState } from "react";
import axios from "axios";
import Presentations from "./components/Presentations";
import QuestionAnswers from "./components/QuestionAnswers";
import CorporateParticipants from "./components/CorporateParticipants";
import ConferenceCallParticipants from "./components/ConferenceCallParticipants";

function App() {
  const [isSelected, setIsSelected] = useState("PR");
  const [fetchedData, setFetchedData] = useState({});
  // console.log(fetchedData);
  const getData = () => {
    console.log("first");
    axios
      .get("http://localhost:3020/data")
      .then((res) => setFetchedData(res.data.items.transcript_data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App" style={{ position: "relative" }}>
      <div
        className="d-flex justify-content-center "
        style={{
          backgroundColor: "white",
          width: "100vw",
          top: "0",
          position: "fixed",
          zIndex: "2",
          boxShadow: "0 8px 6px -6px black",
        }}
      >
        <div
          className="d-flex justify-content-evenly align-items-center p-2 container"
          style={{
            top: "0",
            zIndex: "3",
          }}
        >
          <div
            className="px-3 py-1 rounded"
            style={{
              backgroundColor:
                isSelected === "PR" ? "rgb(57, 57, 216)" : "transparent",
              color: isSelected === "PR" ? "white" : "black",
            }}
            onClick={() => setIsSelected("PR")}
          >
            <h5>Presentation</h5>
          </div>
          <div
            className="px-3 py-1 rounded"
            style={{
              backgroundColor:
                isSelected === "QA" ? "rgb(57, 57, 216)" : "transparent",
              color: isSelected === "QA" ? "white" : "black",
            }}
            onClick={() => setIsSelected("QA")}
          >
            <h5>Q&A</h5>
          </div>
          <div
            className="px-3 py-1 rounded"
            style={{
              backgroundColor:
                isSelected === "CP" ? "rgb(57, 57, 216)" : "transparent",
              color: isSelected === "CP" ? "white" : "black",
            }}
            onClick={() => setIsSelected("CP")}
          >
            <h5>Corporate Participants</h5>
          </div>
          <div
            className="px-3 py-1 rounded"
            style={{
              backgroundColor:
                isSelected === "CCP" ? "rgb(57, 57, 216)" : "transparent",
              color: isSelected === "CCP" ? "white" : "black",
            }}
            onClick={() => setIsSelected("CCP")}
          >
            <h5>Conference Call Participants</h5>
          </div>
        </div>
      </div>
      <div
        className="container p-4"
        style={{ backgroundColor: "", marginTop: "60px" }}
      >
        {isSelected === "PR" ? (
          <Presentations presentations={fetchedData.presentation} />
        ) : isSelected === "QA" ? (
          <QuestionAnswers questions={fetchedData.questions_and_answers} />
        ) : isSelected === "CP" ? (
          <CorporateParticipants
            executives={fetchedData.participants.executives}
          />
        ) : (
          <ConferenceCallParticipants
            analysts={fetchedData.participants.analyst}
          />
        )}
      </div>
    </div>
  );
}

export default App;
