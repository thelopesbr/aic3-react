import "../styles/sidebar.css"

const Sidebar = () => {
  return (
    //criar sidebar
    <aside class="sidebar">
      <div class="sidebar-inner">
        <header class="sidebar-header">
          <button
            type="button"
            class="sidebar-burger"
            onclick="toggleSidebar()"
          ></button>
          <img src="./assets/blocklord-logo.png" class="sidebar-logo" />
        </header>
        <nav class="sidebar-nav">
          <button type="button">
            <img src="./assets/icon-home.svg" />
            <span>Home</span>
          </button>
          <button type="button">
            <img src="./assets/icon-settings.svg" />
            <span style="animation-delay: 0.1s">Settings</span>
          </button>
          <button type="button">
            <img src="./assets/icon-levels.svg" />
            <span style="animation-delay: 0.2s">Levels</span>
          </button>
          <button type="button">
            <img src="./assets/icon-accounts.svg" />
            <span style="animation-delay: 0.3s">Accounts</span>
          </button>
        </nav>
        <footer class="sidebar-footer">
          <button type="button">
            <img src="./assets/icon-lock.svg" />
            <span>Logout</span>
          </button>
        </footer>
      </div>
    </aside>
  );
}

export default Sidebar