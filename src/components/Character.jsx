import { useEffect, useState } from "react";

const Character = ({move}) => {
  const [character, setCharacter] = useState("./Vlad_step-1.png");

  useEffect(() => {
    // if (move) {
    console.log(move);
      setTimeout(() => {
        move && character === "./Vlad_step-1.png"
          ? setCharacter("./Vlad_step-2.png")
          : setCharacter("./Vlad_step-1.png")
        }, 700);
    // }
  }, [character, move]);

  return (
    <>
      <img src={require(`${character}`)} alt="Vlad" />
    </>
  );
}

export default Character