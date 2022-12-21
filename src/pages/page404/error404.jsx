import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./404.css";
import ErrorImg from "./erro404.svg";
import { Button } from "reactstrap";

import { Link } from "react-router-dom";

export const Error404 = () => {

  return (
    <div className="container">
      <p>Hmmm. Algo deu errado!</p>
      <img src={ErrorImg} alt="img-erro" />
      <Button className="refreshPage">
          <Link to="/">Pagina inicial</Link>
      </Button>
      
    </div>
  );
}

