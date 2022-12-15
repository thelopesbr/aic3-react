import "./sidebar.css";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { TbTournament } from "react-icons/tb";
import { IoMdExit } from "react-icons/io";
import ContraiMenu from "./contraiMenu";
import logo from "./logo.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      <ContraiMenu />
      <div className="logo-content">
        <div className="logo">
          <div className="logo-name">
            <div className="logo-name">
              <span>padel</span>tour.
            </div>
          </div>
        </div>
        <img src={logo} id="button_contract" />
      </div>
      <ul className="nav-list">
        <li>
          <a href="#">
            <AiOutlineHome />
            <span className="link-name">Inicio</span>
          </a>
        </li>
        <li>
          <a href="#">
            <TbTournament />
            <span className="link-name">Torneios</span>
          </a>
        </li>
        <li>
          <a href="#">
            <AiOutlineSetting />
            <span className="link-name">Configurações</span>
          </a>
        </li>
      </ul>
      <div className="profile-container">
        <div className="profile">
          <div className="profile-details">
            <img src="profile.png" alt="profile-photo" />
            <div className="name-profile">
              <span>Flávio</span>
            </div>
          </div>
        </div>
      </div>
      <div className="logout-container" id="logout">
        <IoMdExit />
        <span>Sair</span>
      </div>
    </div>
  );
}

export default Sidebar;
