const Person = ({ winnerMap, earnings, counter, setCounter, winners, setWinners }) => {
  function handleClick() {
    const deleteWinner = winners.filter((winnerToDel) => winnerToDel !== winnerMap);
    setWinners(deleteWinner);
    setCounter(counter - 1);
  }

  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      aria-current="true"
    >
      {winnerMap.name}
      <div className="d-flex align-items-lg-center m">
        <button className="btn btn-close me-4 " onClick={handleClick}></button>
        <span className="input-group-text bg-success text-white">
          ${counter > 1 ? earnings / counter : earnings}
        </span>
      </div>
    </li>
  );
};

export default Person;
