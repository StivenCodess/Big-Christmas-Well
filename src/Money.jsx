const Money = ({ collected, setCollected, disableInput, setDisableInput }) => {
  function handleChange(e) {
    setCollected(e.target.value);
  }
  return (
    <>
      <div className="input-group mb-3 ">
        <span className="input-group-text">Money collected $</span>
        <input
          type="number"
          className="form-control"
          aria-label="Money collected"
          value={collected}
          placeholder="Enter the money collected"
          onChange={(e) => handleChange(e)}
          required
          disabled={disableInput ? true : false}
        />
        <span className="input-group-text">.00</span>
      </div>
      <div className="d-flex justify-content-end">
        <button className="btn btn-outline-danger btn-lg ">Reset</button>
      </div>
    </>
  );
};

export default Money;
