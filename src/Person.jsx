const Person = ({ winnerMap }) => {
  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      aria-current="true"
    >
      {winnerMap.name}
      <span className="input-group-text bg-success text-white">$</span>
    </li>
  );
};

export default Person;
