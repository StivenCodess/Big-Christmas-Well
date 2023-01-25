import { useState } from "react";
import List from "./List";
import { winnerList1, winnerList2, winnerList3, winnerList4, winnerList5 } from "./data";
import Money from "./Money";
import "./index.css";
import {
  AiFillTwitterCircle,
  AiFillGoogleCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

function App() {
  const [collected, setCollected] = useState("");
  const [disableInput, setDisableInput] = useState(false);
  const [reset, setReset] = useState(false);

  return (
    <div className="App bg-dark mt-5 vh-100 d-flex flex-column justify-content-between">
      <div className="container-sm py-4 px-3 mx-auto ">
        <h1 className="text-white">BIG CHRISTMAS WELL</h1>
        <Money
          collected={collected}
          setCollected={setCollected}
          disableInput={disableInput}
          setDisableInput={setDisableInput}
          setReset={setReset}
        />
        <h2 className="text-info ">Ganadores 🏆</h2>
        <hr className="text-primary" />
        <List
          collected={collected}
          ranking={1}
          winnerList={winnerList1}
          disableInput={disableInput}
          setDisableInput={setDisableInput}
          reset={reset}
        ></List>
        <List
          collected={collected}
          ranking={2}
          winnerList={winnerList2}
          disableInput={disableInput}
          setDisableInput={setDisableInput}
          reset={reset}
        ></List>
        <List
          collected={collected}
          ranking={3}
          winnerList={winnerList3}
          disableInput={disableInput}
          setDisableInput={setDisableInput}
          reset={reset}
        ></List>
        <List
          collected={collected}
          ranking={4}
          winnerList={winnerList4}
          disableInput={disableInput}
          setDisableInput={setDisableInput}
          reset={reset}
        ></List>
        <List
          collected={collected}
          ranking={5}
          winnerList={winnerList5}
          disableInput={disableInput}
          setDisableInput={setDisableInput}
          reset={reset}
        ></List>
      </div>
      <footer className="bg-dark text-center text-white ">
        <div className="container p-4 pb-0">
          <section className="mb-2">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://twitter.com/tivenzss#"
              target="_blank"
              role="button"
            >
              <AiFillTwitterCircle className="icon" />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://mail.google.com/mail/u/1/?pli=1#inbox"
              role="button"
              target="_blank"
            >
              <AiFillGoogleCircle />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.linkedin.com/in/airtor-stiven-vusanovich-2a6358261/"
              role="button"
              target="_blank"
            >
              <i className="fab fa-linkedin-in"></i>
              <AiFillLinkedin />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://github.com/StivenCodess"
              role="button"
              target="_blank"
            >
              <i className="fab fa-github"></i>
              <AiFillGithub />
            </a>
          </section>
        </div>
        <div className="text-center p-3">
          © 2023 Copyright:
          <a className="text-white" href="#!" target="_blank">
            StivenCodess
          </a>
        </div>
      </footer>
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

/**
        <div className="container p-4 pb-0">
        
        </div>
        <div className="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
        */
