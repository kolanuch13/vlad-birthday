import { useState, useEffect } from "react";
import back from './background.jpg'

const Game = ({ isStart }) => {
  const [score, setScore] = useState(0);
  const [isRasengan, setIsRasengan] = useState(false);
  const [backgroundPosition, setBackgroundPosition] = useState(0);
  const [rasenganPosition, setRasenganPosition] = useState(75);
  const [character, setCharacter] = useState("./Vlad_step-1.png");
  
  const [characterMove, setCharacterMove] = useState({
    top: 680,
    left: 150,
  })
  
  const rasenganOn = (e) => {
    setIsRasengan(true);
    for (let i = characterMove.left; i < 401; i++) {
      setTimeout(() => {
        setRasenganPosition(i);
      }, 500);
    }
    if (rasenganPosition >= 400) {
      setScore(score + 1);
      setRasenganPosition(75);
    }
  }

  const handleMove = (e) => {
    console.log(e);
    switch (e.code) {
      case "KeyUp":
        console.log("Up!");
        setCharacterMove({
          top: 400,
          left: characterMove.left
        })
        break;
        case "KeyA":
        console.log("Back!");
        setCharacterMove({
          top: characterMove.top,
          left: characterMove.left - 1,
        });
        break;
      case "KeyD":
        console.log("Forward!");
        setCharacterMove({
          top: characterMove.top,
          left: characterMove.left + 1,
        });
        break;
        default:
          console.log("Down!");
        setCharacterMove({
          top: 650,
          left: characterMove.left,
        });
        console.log("none");
      }
  }

  useEffect(() => {
    if (isStart && score < 20) {
      setTimeout(() => {
        setBackgroundPosition(backgroundPosition + 0.3);
        // console.log(backgroundPosition);
    }, 100);
    setTimeout(() => {
      character === "./Vlad_step-1.png"
        ? setCharacter("./Vlad_step-2.png")
        : setCharacter("./Vlad_step-1.png");    
    }, 1000);
    }
  }, [backgroundPosition, character, isStart, score]);
  

  return (
    <div
    onClick={rasenganOn}
    onKeyPress={handleMove}
    style={{
      width: `100vw`,
      height: `700px`,
      backgroundImage: `url(${back})`,
      backgroundPosition: `${backgroundPosition}% 0%`,
    }}
    >
    <p>score: {score}</p>
    {score !== 5 && <div>
      <img
        src={require(`${character}`)}
        alt="Vlad"
        style={{ position: `absolute`, top: 680, left: 50 }}
      />
      <img
        src={require("./Rasengan.png")}
        alt="Rasengan"
        style={{
          display: `${() => (isRasengan ? "block" : "none")}`,
          zIndex: `100`,
          position: `absolute`,
          top: `calc(${characterMove.top}px + 55px)`,
          left: `${rasenganPosition}px`,
        }}
      />
      {backgroundPosition >= 10 && score < 1 && (
        <img
          src={require("./Aromakava.png")}
          alt="Rasengan"
          style={{
            width: `300px`,
            position: `absolute`,
            top: 550,
            left: `60vw`,
          }}
        />
      )}
      {backgroundPosition >=20 && score < 2 && (
        <img
          src={require("./BigBoard.png")}
          alt="Rasengan"
          style={{
            width: `300px`,
            position: `absolute`,
            top: 550,
            left: `60vw`,
          }}
        />
      )}
      {backgroundPosition >= 30 && score < 3 && (
        <img
          src={require("./Pharmacy.png")}
          alt="Rasengan"
          style={{
            width: `300px`,
            position: `absolute`,
            top: 550,
            left: `60vw`,
          }}
        />
      )}
      {backgroundPosition >= 40 && score < 4 && (
        <img
          src={require("./parkovka.png")}
          alt="Rasengan"
          style={{
            width: `300px`,
            position: `absolute`,
            top: 650,
            left: `60vw`,
          }}
        />
      )}
      {backgroundPosition >= 50 && score < 5 && (
        <img
          src={require("./bolt.png")}
          alt="Rasengan"
          style={{
            width: `100px`,
            position: `absolute`,
            top: 670,
            left: `60vw`,
          }}
        />
      )}
    </div>}
    {score === 5 && <div>
      <h1>YOU CLEAR CITY FROM TRASH!</h1>
      <h2>HAPPY BIRTHDAY</h2>
    </div>}
  </div>
);
}

export default Game