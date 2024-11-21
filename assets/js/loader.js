// loader.js - Dynamically loads the sidebar and footer
document.addEventListener("DOMContentLoaded", () => {
  // Ensure sidebar and footer are already in the HTML, no need for dynamic loading
  const sidebar = document.querySelector('.sidebar');
  const footer = document.querySelector('footer');

  // Sidebar Toggle functionality
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active'); // Toggle the visibility of the sidebar
    });
  }

  // Highlight active link in sidebar
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
      sidebarLinks.forEach(link => link.classList.remove('active'));
      link.classList.add('active'); // Highlight the clicked link
    });
  });
});
