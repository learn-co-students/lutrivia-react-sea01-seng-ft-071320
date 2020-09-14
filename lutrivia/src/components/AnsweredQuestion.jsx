import React from "react";

function AnsweredQuestion(props) {
  const trueStyle = {};
  const falseStyle = {};

  if (props.response === true) {
    if (props.answer === true) {
      trueStyle["background-color"] = "springGreen";
    } else {
      trueStyle["background-color"] = "tomato";
    }
  } else if (props.response === false) {
    if (props.answer === false) {
      falseStyle["background-color"] = "springGreen";
    } else {
      falseStyle["background-color"] = "tomato";
    }
  }

  return (
    <div className="question">
      <h2>{props.text}</h2>
      <div className="flex flow-left">
        <button className="btn" style={trueStyle}>
          True
        </button>
        <button className="btn" style={falseStyle}>
          False
        </button>
      </div>
    </div>
  );
}

export default AnsweredQuestion;
