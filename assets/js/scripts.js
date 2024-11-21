// Sidebar toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".sidebar-toggle");
  const sidebar = document.querySelector(".sidebar");

  if (toggleButton) {
    toggleButton.addEventListener("click", function () {
      sidebar.classList.toggle("active");
    });
  }
});
