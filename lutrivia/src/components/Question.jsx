import React from "react";

function Question(props) {
  return (
    <div className="question">
      <h2>{props.text}</h2>
      <div className="flex flow-left">
        <button
          onClick={() => props.answerQuestion(props.id, true)}
          className="btn"
        >
          True
        </button>
        <button
          onClick={() => props.answerQuestion(props.id, false)}
          className="btn"
        >
          False
        </button>
      </div>
    </div>
  );
}

export default Question;
