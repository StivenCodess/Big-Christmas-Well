import { useState, useEffect } from "react";
import { AiFillEdit } from "react-icons/ai";

const Person = ({ winnerMap, earnings, counter, setCounter, winners, setWinners }) => {
  const [edit, setEdit] = useState(false);

  function handleClick() {
    const deleteWinner = winners.filter((winnerToDel) => winnerToDel !== winnerMap);
    setWinners(deleteWinner);
    setCounter(counter - 1);
  }

  function Editing() {
    const [editValue, setEditValue] = useState("");

    function handleChange(e) {
      setEditValue(e.target.value);
      console.log(e.target.value);
    }

    function handleClickSave() {
      winnerMap.name = editValue;
      setWinners = [...winners, winnerMap];
      setEdit(false);
    }
    return (
      <>
        <div className="d-flex">
          <input
            type="text"
            className="rounded-2 p-2"
            placeholder={winnerMap.name}
            value={editValue}
            onChange={(e) => handleChange(e)}
          />
          <button className="ms-2 btn btn-success" onClick={handleClickSave}>
            Save
          </button>
        </div>
      </>
    );
  }

  function NoEditing() {
    return (
      <>
        {winnerMap.name}
        <div className="d-flex align-items-center justify-content-center">
          <AiFillEdit
            className="text-primary me-3 edit-icon"
            onClick={() => setEdit(true)}
          />
          <button className="btn btn-close me-4 " onClick={handleClick}></button>
          <span className="input-group-text bg-success text-white">
            ${counter > 1 ? earnings / counter : earnings}
          </span>
        </div>
      </>
    );
  }

  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      aria-current="true"
    >
      {edit ? <Editing /> : <NoEditing />}
    </li>
  );
};

export default Person;
