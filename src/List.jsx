import { useState, useEffect } from "react";
import Person from "./Person";

const List = ({ ranking, winnerList }) => {
  const INITIAL_INPUT = "";
  const INITIAL_WINNER = { name: "", amount: 0 };
  const [inputShow, setInputShow] = useState(INITIAL_INPUT);
  const [winner, setWinner] = useState(INITIAL_WINNER);
  const [winners, setWinners] = useState(winnerList);
  const [counter, setCounter] = useState(0);

  function validate() {
    if (ranking !== 1) {
      return false;
    } else if (counter === 1) {
      return true;
    } else {
      return null;
    }
  }

  function handleChange(event) {
    setInputShow(event.target.value);
    setWinner({ name: event.target.value, amount: 10 });
  }

  function handleClick() {
    setInputShow("");
    setWinners([...winners, winner]);
    setCounter(counter + 1);
  }

  return (
    <div>
      <form className="input-group mb-3">
        <h4 className="text-white">{ranking}</h4>
        <input
          type="text"
          onChange={handleChange}
          value={inputShow}
          disabled={validate() ? true : false}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleClick}
          disabled={validate() ? true : false}
        >
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
