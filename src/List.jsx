import { useState } from "react";
import Person from "./Person";

const List = ({ ranking, winnerList, collected, disableInput, setDisableInput }) => {
  const INITIAL_INPUT = "";
  const INITIAL_WINNER = { name: "", amount: 0 };
  const [inputShow, setInputShow] = useState(INITIAL_INPUT);
  const [winner, setWinner] = useState(INITIAL_WINNER);
  const [earnings, setEarnings] = useState(0);
  const [winners, setWinners] = useState(winnerList);
  const [counter, setCounter] = useState(0);

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
    setDisableInput((disableInput = true));
    switch (ranking) {
      case 1:
        setEarnings(collected * 0.5);
        break;
      case 2:
        setEarnings(collected * 0.2);
        break;
      case 3:
        setEarnings(collected * 0.15);
        break;
      case 4:
        setEarnings(collected * 0.1);
        break;
      case 5:
        setEarnings(collected * 0.05);
        break;
      default:
        break;
    }
  }

  function h4Name() {
    return;
  }

  return (
    <div>
      <form className="input-group mb-3" onSubmit={(e) => handleSubmit(e)}>
        <h4 className="text-white me-4">Puesto numero {ranking}</h4>
        <input
          type="text"
          onChange={handleChange}
          value={inputShow}
          disabled={validate() ? true : false}
          className="rounded-1"
        />
        <button
          className="btn btn-primary ms-2 rounded-2"
          disabled={validate() ? true : false}
        >
          ADD
        </button>
      </form>

      <ul className="list-group mb-3">
        {winners.map((winnerMap) => (
          <Person
            key={winnerMap.name}
            winnerMap={winnerMap}
            ranking={ranking}
            earnings={earnings}
            counter={counter}
          ></Person>
        ))}
      </ul>
    </div>
  );
};

export default List;
