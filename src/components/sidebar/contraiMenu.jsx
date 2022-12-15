function contraiMenu() {
  let sidebar = document.querySelector(".sidebar");

  sidebar.onmouseenter = function () {
    sidebar.classList.toggle("active");
  };
  sidebar.onmouseleave = function () {
    sidebar.classList.remove("active");
  };
}
export default contraiMenu;
