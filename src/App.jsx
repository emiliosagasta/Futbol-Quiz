import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import Start from "./components/Start";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

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
    {
      id: 4,
      question:"¿Cuántos goles anotó Maradona para ayudar al equipo local Argentina a ganar el campeonato en 1978?",
      answers: [
          {
              text: "0",
              correct: true,
          },
          {
              text: "1",
              correct: false,
          },
          {
              text: "2",
              correct: false,
          },
          {
              text: "4",
              correct: false,
          },
      ],
  },
  {
    id: 5,
    question:"¿Quién interpretó la canción de la Copa Mundial 2010 'Waka Waka (This Time For Africa) junto con la banda Freshlyground de Sudáfrica?",
    answers: [
        {
            text: "Rihanna",
            correct: false,
        },
        {
            text: "Shakira",
            correct: true,
        },
        {
            text: "Rosalia",
            correct: false,
        },
        {
            text: "Beyonce",
            correct: false,
        },
    ],
  },
  {
    id: 6,
    question:"¿Qué tuvo de inusual la victoria de Holanda en la tanda de penaltis sobre Costa Rica en 2014?",
    answers: [
        {
            text: "Louis van Gaal incorporó a un portero suplente para la tanda de penaltis.",
            correct: true,
        },
        {
            text: "El penal de la victoria tuvo que repetirse dos veces.",
            correct: false,
        },
        {
            text: "Solo se marcó un penalti.",
            correct: false,
        },
        {
            text: "La pelota no se encontraba en el punto del penal.",
            correct: false,
        },
    ],
  },
  {
    id: 7,
    question:"¿Cuál de estos países NO ha sido sede de la Copa del Mundo dos veces?",
    answers: [
        {
            text: "Ciudad de México",
            correct: false,
        },
        {
            text: "España",
            correct: true,
        },
        {
            text: "Italia",
            correct: false,
        },
        {
            text: "Francia",
            correct: false,
        },
    ],
  },
  {
    id: 8,
    question:"¿Quién ganó el título de máximo goleador del torneo en suelo mexicano en 1986?",
    answers: [
        {
            text: "Diego Maradona",
            correct: false,
        },
        {
            text: "Michel Platini",
            correct: false,
        },
        {
            text: "Gary Linker",
            correct: true,
        },
        {
            text: "Zico",
            correct: false,
        },
    ],
  },
];
  const moneyPyramid = useMemo(() =>  
   [ 
    { id:1, amount: "$ 100"},
    { id:2, amount: "$ 200"},
    { id:3, amount: "$ 300"},
    { id:4, amount: "$ 500"},
    { id:5, amount: "$ 1.000"},
    { id:6, amount: "$ 2.000"},
    { id:7, amount: "$ 4.000"},
    { id:8, amount: "$ 8.000"},
    { id:9, amount: "$ 16.000"},
    { id:10, amount: "$ 32.000"},
    { id:11, amount: "$ 64.000"},
    { id:12, amount: "$ 125.000"},
    { id:13, amount: "$ 250.000"},
    { id:14, amount: "$ 500.000"},
    { id:15, amount: "$ 1.000.000"},
   ].reverse(),
  []
 );

    useEffect (() =>{
      questionNumber > 1 && setEarned(moneyPyramid.find(m => m.id === questionNumber - 1).amount);
    }, [moneyPyramid,questionNumber])
    return (
    <div className="app">
        {username ? (
    <>
    <div className="main">
        {stop ? ( 
          <h1 className="endText">Usted ganó: {earned} </h1> 
        ) : (
        <>
        <div className="top">
          <div className="timer">
            <Timer setStop={setStop} questionNumber={questionNumber} />
          </div>
        </div>
        <div className="bottom">
          <Trivia 
            data={data}
            setStop={setStop}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber} 
          />
        </div>
    </>
    )}

      </div>
       <div className="pyramid">
          <ul className="moneyList">
            {moneyPyramid.map((m) => ( 
              <li 
                className={
                    questionNumber === m.id
                    ? "moneyListItem active"
                    : "moneyListItem"}
              >
                <span className="moneyListItemNumber">{m.id}</span>
                <span className="moneyListItemAmount">{m.amount}</span>
              </li>
          ))}      
          </ul>
       </div>
    </>        
    ) : (
       <Start setUsername={setUsername}/>
      )}
    </div>
  );
}

export default App;
