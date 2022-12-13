import "sidebar3.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-content">
        <div className="logo">
          <div className="logo-name">
            <div className="logo-name">
              <span>padel</span>tour.
            </div>
          </div>
        </div>
        <img src="Group.svg" id="button_contract" />
      </div>
      <ul className="nav-list">
        <li>
          <a href="#">
            <i className="bx bx-home-alt-2"></i>
            <span className="link-name">Inicio</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-flag"></i>
            <span className="link-name">Torneios</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-cog"></i>
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
        <i className="bx bx-exit"></i>
        <span>Sair</span>
      </div>
    </div>
  );
}
export default Sidebar;
