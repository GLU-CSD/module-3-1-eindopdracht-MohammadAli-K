document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const sidebarBtn = document.getElementById("sidebar-btn");
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  const info = document.querySelector(".info");

  sidebarBtn.addEventListener("click", function () {
    sidebar.classList.toggle("visible");
    header.classList.toggle("shift-right");
    footer.classList.toggle("shift-right");
    info.classList.toggle("shift-right");
  });
});
