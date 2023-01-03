import { useState } from "react";
import "./app.css";
import Trivia from "./components/Trivia";

function App() {

  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)

  const data = [
    {
        id: 1,
        question:"​¿Qué país ganó el primer torneo de fútbol de la Copa Mundial Masculina de la FIFA?",
        answers: [
            {
                text: "Alemania",
                correct: false,
            },
            {
                text: "​Italia",
                correct: false,
            },
            {
                text: "​Uruguay",
                correct: true,
            },
            {
                text: "​Brasil",
                correct: false,
            },
        ],
    },
    {
        id: 2,
        question:"¿Qué país se convirtió en el primero de África en competir en una final de la Copa del Mundo?",
        answers: [
            {
                text: "Egipto",
                correct: true,
            },
            {
                text: "Marruecos",
                correct: false,
            },
            {
                text: "Túnez",
                correct: false,
            },
            {
                text: "Argelia",
                correct: false,
            },
        ],
    },
    {
        id: 3,
        question:"¿Qué país fue el primero en ganar dos mundiales?",
        answers: [
            {
                text: "Argentina",
                correct: false,
            },
            {
                text: "Brasil",
                correct: false,
            },
            {
                text: "Alemania",
                correct: false,
            },
            {
                text: "Italia",
                correct: true,
            },
        ],
    },
];
  const moneyPyramid = [
    {id:1, amount:"$ 100"},
    {id:2, amount:"$ 200"},
    {id:3, amount:"$ 300"},
    {id:4, amount:"$ 500"},
    {id:5, amount:"$ 1.000"},
    {id:6, amount:"$ 2.000"},
    {id:7, amount:"$ 4.000"},
    {id:8, amount:"$ 8.000"},
    {id:9, amount:"$ 16.000"},
    {id:10, amount:"$ 32.000"},
    {id:11, amount:"$ 64.000"},
    {id:12, amount:"$ 125.000"},
    {id:13, amount:"$ 250.000"},
    {id:14, amount:"$ 500.000"},
    {id:15, amount:"$ 1.000.000"},
  ].reverse();

  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          <Trivia 
            data={data}
            setStop={setStop}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber} 
          />
        </div>
      </div>
       <div className="pyramid">
          <ul className="moneyList">
            {moneyPyramid.map((m) => ( 
              <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
                <span className="moneyListItemNumber">{m.id}</span>
                <span className="moneyListItemAmount">{m.amount}</span>
              </li>
          ))}      
          </ul>
       </div>
    </div>
  );
}

export default App;
