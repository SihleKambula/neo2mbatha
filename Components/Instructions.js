import { useEffect, useState } from "react";
import instructions from "../model/instructions";
import style from "../styles/Instruction.module.scss";
const Instructions = () => {
  const [order, setOrder] = useState(1);

  // Change the order of the site per view change
  useEffect(() => {
    if (screen.width <= 600) {
      setOrder(0);
    }
  }, []);

  return (
    <div className={style.container}>
      <h1>Here's how it works</h1>.
      {instructions.map((instruction) => {
        if (instruction.id % 2) {
          return (
            <div className={style.instruction_container} key={instruction.id}>
              <div className={style.details_container}>
                <div className={style.details}>
                  <h2>{instruction.step}</h2>
                  <h2>{instruction.heading}</h2>
                  <p>{instruction.para}</p>
                </div>
              </div>
              <div className={style.image}>
                <img src={`${instruction.image}`} alt='image' />
              </div>
            </div>
          );
        }
        return (
          <div className={style.instruction_container} key={instruction.id}>
            <div className={style.details_container} style={{ order }}>
              <div className={style.details}>
                <h2>{instruction.step}</h2>
                <h2>{instruction.heading}</h2>
                <p>{instruction.para}</p>
              </div>
            </div>
            <div className={style.image}>
              <img src={`${instruction.image}`} alt='image' />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Instructions;
