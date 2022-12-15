import "./formulario.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";
import { BiDollar, BiCalendar, BiMap } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

function FormCampeonato() {
  const [image, setImage] = useState("");
  const [endImg] = useState("./padel-thumbnail.jpg");
  const [dataIni, setDataIni] = useState("");
  const [dataEnd, setDataEnd] = useState("");
  const [dupla, setDupla] = useState(0);
  const [endereco, setEndereco] = useState("");
  const [valor, setValor] = useState("");

  return (
    <div className="container_principal">
      <div className="container_formulario">
        <div className="formulario">
          <Form>
            <FormGroup>
              <Label for="inicio_campeonato">Inicio do Campeonato *</Label>
              <Input
                id="inicio_campeonato"
                placeholder="01/01/1990"
                type="date"
                value={dataIni}
                onChange={(e) => setDataIni(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="termino_campeonato">Término do campeonato *</Label>
              <Input
                id="termino_campeonato"
                name="termino"
                placeholder="01/01/1990"
                type="date"
                value={dataEnd}
                onChange={(e) => setDataEnd(e.target.value)}
              />
            </FormGroup>
            <div className="grid">
              <div className="categorias">
                <label>Categorias*</label>
                <div className="checkboxes">
                  <FormGroup check>
                    <Input type="checkbox" /> <Label check>Feminino</Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input type="checkbox" /> <Label check>Masculino</Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input type="checkbox" /> <Label check>Misto</Label>
                  </FormGroup>
                </div>
              </div>
              <div className="dupla_quadra">
                <FormGroup className="dupla">
                  <Label for="nr_duplas">Nrº de duplas *</Label>
                  <Input
                    id="nr_duplas"
                    name="nr_duplas"
                    type="select"
                    value={dupla}
                    onChange={(e) => setDupla(e.target.value)}
                  >
                    <option>6</option>
                    <option>9</option>
                    <option>12</option>
                    <option>15</option>
                    <option>18</option>
                    <option>21</option>
                    <option>24</option>
                    <option>27</option>
                    <option>30</option>
                  </Input>
                </FormGroup>
                <FormGroup className="quadra">
                  <Label for="nr_quadra">Quadras *</Label>
                  <Input
                    id="nr_quadras"
                    name="nr_quadras"
                    placeholder="4"
                    type="number"
                  />
                </FormGroup>
              </div>
            </div>
            <FormGroup>
              <Label for="cep">Localização*</Label>
              <Input
                id="cep"
                name="cep"
                placeholder="Rua A , 888"
                type="text"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="quadra">
              <Label for="nr_quadra">Valor *</Label>
              <Input
                id="valor"
                name="valor"
                placeholder="10"
                type="number"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="imagem_campeonato">Imagem Campeonato </Label>
              <Input
                id="imagem_campeonato"
                name="image"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <FormText>dimensões de 250 x 250 *</FormText>
            </FormGroup>
            <div className="btn_next">
              <Button className="next_btn">Proximo</Button>
              <AiOutlineArrowRight />
            </div>
          </Form>
        </div>
        <div className="container_card">
          <label>Pré Visualização</label>
          <div className="card">
            <div className="img_content">
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Imagem"
                  className="photo_championship"
                />
              ) : (
                <img
                  src={endImg}
                  alt="photo-championship"
                  className="photo_championship"
                />
              )}
            </div>
            <div className="info_card">
              <div>
                <BiCalendar className="icon_card" />
                <p>{dataIni}</p>
                <AiOutlineArrowRight className="arrow" />
                <p>{dataEnd}</p>
              </div>
              <div>
                <BiMap className="icon_card" />
                <p>{endereco}</p>
              </div>
              <div>
                <BiDollar className="icon_card" />
                <p>R$ {valor}</p>
              </div>
              <div>
                <BsPeople className="icon_card" />
                <p>{dupla}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FormCampeonato;
