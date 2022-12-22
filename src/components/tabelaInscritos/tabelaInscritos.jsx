import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./inscritos.css";
import { Table, FormGroup, Input, Button } from "reactstrap";

export const TabelaInscrito = () => {
  return (
    <div>
      <Table responsive className="tabela">
        <thead>
          <tr>
            <th>#</th>
            <th>Dupla</th>
            <th>Pontuação</th>
            <th>Categoria</th>
            <th>Pagamento</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>
              <p>nome1</p>
              <p>nome2</p>
            </td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>
              <FormGroup switch>
                <Input type="switch" role="switch" className="paySwitch" />
              </FormGroup>
            </td>
            <td>
              <Button color="danger">Excluir</Button>
            </td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>
              <p>nome1</p>
              <p>nome2</p>
            </td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>
              <FormGroup switch>
                <Input type="switch" role="switch" className="paySwitch" />
              </FormGroup>
            </td>
            <td>
              <Button color="danger" className="excluir">
                Excluir
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="btn">
        <Button className="btn_criaCampeonato">CRIAR CAMPEONATO</Button>
      </div>
    </div>
  );
}

