import "./formulario.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { React, useState } from "react";
import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";
import { BiDollar, BiCalendar, BiMap } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import logo from "./aqua_padel.jpg";
import { useForm } from "react-hook-form";

export const FormCampeonato = () => {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (e) => {
    console.log(e);
  };
  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        const logradouro = document.querySelector("#logradouro");
        const cidade = document.querySelector("#cidade");
        const bairro = document.querySelector("#bairro");
        const uf = document.querySelector("#uf");
        const city_uf = document.getElementById("city_uf");

        function setaCidadeEstado(valor) {
          if (typeof valor === "undefined") {
            city_uf.innerHTML = "error";
          } else city_uf.innerText = data.localidade + "/" + data.uf;
        }
        setaCidadeEstado(city_uf);

        logradouro.value = data.logradouro;
        cidade.value = data.localidade;
        bairro.value = data.bairro;
        uf.value = data.uf;
        setValue("logradouro", data.logradouro);
        setValue("cidade", data.localidade);
        setValue("bairro", data.bairro);
        setValue("uf", data.uf);
      });
  };
  const [image, setImage] = useState("");
  const [endImg] = useState({ logo });
  const [dataIni, setDataIni] = useState("");
  const [dataEnd, setDataEnd] = useState("");
  const [dupla, setDupla] = useState(0);
  const [valor, setValor] = useState("");

  return (
    <div className="container_principal">
      <div className="container_formulario">
        <div className="formulario">
          <Form onSubmit={handleSubmit(onSubmit)}>
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
                  <Input id="nr_quadras" placeholder="4" type="number" />
                </FormGroup>
              </div>
            </div>
            <FormGroup className="quadra">
              <Label for="valor">Valor *</Label>
              <Input
                id="valor"
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
            <FormGroup className="quadra">
              <Label for="cep">CEP*</Label>
              <Input
                id="cep"
                placeholder="99999-999"
                type="text"
                {...register("cep")}
                onBlur={checkCEP}
              />
            </FormGroup>
            <FormGroup className="quadra">
              <Label for="logradouro">Logradouro</Label>
              <Input id="logradouro" type="text" {...register("logradouro")} />
            </FormGroup>
            <FormGroup className="quadra">
              <Label for="bairro">Bairro *</Label>
              <Input
                id="bairro"
                placeholder="Centro"
                type="text"
                {...register("bairro")}
              />
            </FormGroup>
            <FormGroup className="quadra">
              <Label for="complemento">Complemento</Label>
              <Input id="complemento" placeholder="BL 1 Ap 101" type="text" />
            </FormGroup>
            <FormGroup className="numero_estabelecimento">
              <Label for="nr_estabelecimento">Número*</Label>
              <Input id="nr_estabelecimento" placeholder="881" type="text" />
            </FormGroup>
            <div className="cidade_uf">
              <FormGroup className="cidade">
                <Label for="cidade">Cidade*</Label>
                <Input
                  id="cidade"
                  placeholder="Rio Grande"
                  type="text"
                  {...register("cidade")}
                />
              </FormGroup>
              <FormGroup className="uf " {...register("uf")}>
                <Label for="uf">UF*</Label>
                <Input id="uf" placeholder="RS" type="text" />
              </FormGroup>
            </div>
            <div className="btn_register">
              <Button className="register_btn" type="submit">
                Criar Torneio
              </Button>
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
                  src={logo}
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
                <p id="city_uf"></p>
              </div>
              <div>
                <BiDollar className="icon_card" />
                <p> {valor}</p>
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

