import React from "react";
import ResultList from "./properties/resultList";
import SavedList from "./properties/savedList";
import "./Styles.css";

function App() {
  return (
    <div className="main-container">
      <h1> REA Assignment </h1>
      <div className="list-container">
        <div className="result-container">
          <h2> Result </h2>
          <ResultList />
        </div>
        <div className="saved-container">
          <h2> Saved Properties </h2>
          <SavedList />
        </div>
      </div>
    </div>
  );
}

export default App;
