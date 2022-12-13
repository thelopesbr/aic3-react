


import "./Login.css"
import { Title } from "../../components/TitleProject/TitleProject"
import girl from "../../assets/girl.svg"
import person from "../../assets/person.svg"
import visibility from "../../assets/visibility.svg"

export const Login  = () => {
  return (
    <div className="screen">
     <div className="triangle"></div>
      <div className="containerLogin">
      <Title first="padel" last="tour."/>
          <div className="forms">
            <form method="post"> 
              <div className="field">
                <label className="labelLogin" for="email_login">Usuário</label>
                <input className="inputLogin" id="email_login" required="required" type="email" placeholder="contato@padeltour.com"/>
                <img className="personIcon" src={person} alt="usuario" />
              </div>
              
              <div className="field">
                <label className="labelLogin" for="senha_login">Senha</label>
                <input className="inputLogin" id="senha_login"  required="required" type="password" placeholder="*************" /> 
                <img className="visibilityIcon" src={visibility} alt="mostrar/ocultar senha" />

              </div>
            </form>
            <a  className="forgot-password" href="#">Esqueceu a senha?</a>
            <div className="buttons">
                <button className="loginButton" >LOGIN</button>
                <button className="registerButton" >CRIAR CONTA </button>
            </div>
          </div>
          <img className="imgLogin" src={girl} alt="" />
      </div>
    </div>
    );
};
