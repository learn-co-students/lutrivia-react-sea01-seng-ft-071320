import React, { Component } from "react";
import Question from "./Question";
import AnsweredQuestion from "./AnsweredQuestion";
import "../css/App.css";

import data from "../data";

class App extends Component {
  state = {
    questions: [...data.questions],
    current: 0,
    score: 0,
  };

  score = () => {
    const score = this.state.score + 1;
    this.setState({
      score: score,
    });
  };

  newGame = () => {
    this.setState({
      questions: [...data.questions],
      current: 0,
      score: 0,
    });
  };

  answerQuestion = (id, answer) => {
    // Find the question answered
    const question = this.state.questions.find(
      (question) => question.id === id
    );

    // Mutate this question with the user's response
    question.response = answer;

    if (answer === question.answer) {
      this.score();
    }

    // Move to the next question
    const next = this.state.current + 1;
    this.setState({
      current: next,
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Lutrivia</h1>
        <div className="flex flex-between">
          <button onClick={this.newGame} className="btn">
            New Game
          </button>
          <h2>Score: {this.state.score}</h2>
        </div>
        <div className="flex flex-col">
          {this.state.questions.map((question, i) =>
            !!(i < this.state.current) ? (
              <AnsweredQuestion {...question} key={question.id} />
            ) : null
          )}

          {!!this.state.questions[this.state.current] ? (
            <Question
              {...this.state.questions[this.state.current]}
              answerQuestion={this.answerQuestion}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
