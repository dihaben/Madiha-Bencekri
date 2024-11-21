// loader.js - Dynamically loads the navbar, sidebar, and footer
document.addEventListener("DOMContentLoaded", () => {
  const loadHTML = async (selector, file) => {
    const element = document.querySelector(selector);
    if (element) {
      const response = await fetch(file);
      if (response.ok) {
        element.innerHTML = await response.text();
      } else {
        console.error(`Failed to load ${file}: ${response.status}`);
      }
    }
  };

  // Load the navbar, sidebar, and footer from their respective files
  loadHTML("header", "navbar.html");  // Load navbar
  loadHTML("aside", "sidebar.html");  // Load sidebar
  loadHTML("footer", "footer.html");  // Load footer

  // Sidebar Toggle functionality
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });
  }
});
