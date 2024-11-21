document.addEventListener("DOMContentLoaded", () => {
  const sidebarToggle = document.querySelector(".sidebar-toggle");
  const sidebar = document.querySelector(".sidebar");

  sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    document.body.classList.toggle("sidebar-open");
  });
});
