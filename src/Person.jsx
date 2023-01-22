import { useEffect } from "react";
const Person = ({ winnerMap, earnings, counter }) => {
  useEffect(() => {
    console.log("render person");
  });
  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      aria-current="true"
    >
      {winnerMap.name}
      <span className="input-group-text bg-success text-white">
        ${counter > 1 ? earnings / counter : earnings}
      </span>
    </li>
  );
};

export default Person;
