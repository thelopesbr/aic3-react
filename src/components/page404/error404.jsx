import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./404.css";
import ErrorImg from "./erro404.svg";
import { Button } from "reactstrap";

function Error404() {
  return (
    <div className="container">
      <p>Hmmm. Algo deu errado!</p>
      <img src={ErrorImg} alt="img-erro" />
      <Button className="refreshPage">RECARREGAR PAGINA</Button>
    </div>
  );
}
export default Error404;
