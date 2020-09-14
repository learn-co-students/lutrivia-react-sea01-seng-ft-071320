import React from "react";

function AnsweredQuestion(props) {
  let trueBg = "grey";
  let falseBg = "grey";

  if (props.response === true) {
    if (props.answer === true) {
      trueBg = "springGreen";
    } else {
      trueBg = "tomato";
    }
  } else if (props.response === false) {
    if (props.answer === false) {
      falseBg = "springGreen";
    } else {
      falseBg = "tomato";
    }
  }

  return (
    <div className="question">
      <h2>{props.text}</h2>
      <div className="flex flow-left">
        <button className="btn" style={{ backgroundColor: trueBg }}>
          True
        </button>
        <button className="btn" style={{ backgroundColor: falseBg }}>
          False
        </button>
      </div>
    </div>
  );
}

export default AnsweredQuestion;
