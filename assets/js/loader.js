// loader.js - Manages sidebar toggle and active link highlighting for the sidebar

document.addEventListener("DOMContentLoaded", () => {
  // Sidebar Toggle functionality for mobile or smaller screens
  const sidebarToggle = document.querySelector('.sidebar-toggle'); // Sidebar toggle button (for mobile or small screens)
  const sidebar = document.querySelector('.sidebar');  // Sidebar element

  // If sidebar toggle and sidebar exist, add click event to toggle the sidebar visibility
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active'); // Toggle visibility of sidebar (using active class)
    });
  }

  // Highlight active link in sidebar
  const sidebarLinks = document.querySelectorAll('.sidebar-link'); // All sidebar links
  sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Remove the 'active' class from all links
      sidebarLinks.forEach(link => link.classList.remove('active'));

      // Add 'active' class to the clicked link to highlight it
      link.classList.add('active');
    });
  });
});
