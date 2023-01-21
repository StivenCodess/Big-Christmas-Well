import { useState } from "react";
import { Button } from "react-bootstrap";
import List from "./List";
import { winnerList1, winnerList2 } from "./data";

function App() {
  const [collected, setCollected] = useState("");

  function handleChange(e) {
    setCollected(e.target.value);
    console.log(collected);
  }
  return (
    <div className="App bg-dark mt-5">
      <div className="container-sm py-4 px-3 mx-auto ">
        <h1 className="text-white">BIG CHRISTMAS WELL</h1>

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
          />
          <span className="input-group-text">.00</span>
        </div>

        <h2 className="text-primary mt-5">Ganadores</h2>
        <hr className="text-primary" />

        <List collected={collected} ranking={1} winnerList={winnerList1}></List>
        <List collected={collected} ranking={2} winnerList={winnerList2}></List>
        {/* <List ranking={"2"} winnerList={winnerList2}></List>
        <List ranking={"3"} winnerList={winnerList3}></List>
        <List ranking={"4"} winnerList={winnerLis4}></List>
        <List ranking={"5"} winnerList={winnerList5}></List> */}
      </div>
    </div>
  );
}

export default App;

//? 5 premios en efectivo los montos se calcula teniendo en cuenta:
//? Recaudacion Total / La cantidad de ganadores por cada puesto

//? Los puestos se determinan segun la cantidad de aciertos.
//? 1er puesto 10/10
//? 2do 9/10
//? 3ro 8/10
//? 4to 7/10
//? 5to 6/10

//? El monto de dinero para cada puesto se calcula de manera porcentual y distribuido entre la cantidad de ganadores:
//? 1er 50% de lo Collected (un solo ganador)
//? 2do 20% de lo Collected / cantidad de ganadores
//? 3ro 15% de lo Collected / cantidad de ganadores
//? 4to 10% de lo Collected / cantidad de ganadores
//? 5to 5%  de lo Collected / cantidad de ganadores
