import { useState, useEffect } from "react";
import Person from "./Person";

const List = ({ ranking, winnerList, collected }) => {
  const INITIAL_INPUT = "";
  const INITIAL_WINNER = { name: "", amount: 0 };
  const [inputShow, setInputShow] = useState(INITIAL_INPUT);
  const [winner, setWinner] = useState(INITIAL_WINNER);
  const [winners, setWinners] = useState(winnerList);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log(typeof collected);
  });
  function validate() {
    if (collected !== "") {
      if (ranking !== 1) {
        return false;
      } else if (counter === 1) {
        return true;
      } else {
        return null;
      }
    } else {
      return true;
    }
  }

  function handleChange(event) {
    setInputShow(event.target.value);
    setWinner({ name: event.target.value, amount: 10 });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setInputShow("");
    setWinners([...winners, winner]);
    setCounter(counter + 1);
  }

  return (
    <div>
      <form className="input-group mb-3" onSubmit={(e) => handleSubmit(e)}>
        <h4 className="text-white">{ranking}</h4>
        <input
          type="text"
          onChange={handleChange}
          value={inputShow}
          disabled={validate() ? true : false}
        />
        <button className="btn btn-primary" disabled={validate() ? true : false}>
          ADD
        </button>
      </form>

      <ul className="list-group mb-3">
        {winners.map((winnerMap) => (
          <Person key={winnerMap.name} winnerMap={winnerMap}></Person>
        ))}
      </ul>
    </div>
  );
};

export default List;

/**if (ranking !== 1) {
        return false;
      } else if (counter === 1) {
        return true;
      } else {
        return null;
      } */
