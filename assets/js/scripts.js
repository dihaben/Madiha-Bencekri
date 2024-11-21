document.addEventListener("DOMContentLoaded", () => {
  const sidebarToggle = document.querySelector(".sidebar-toggle");
  const sidebar = document.querySelector(".sidebar");

  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }
});
