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

  // Load the navbar, sidebar, and footer from the assets folder
  loadHTML("header", "assets/navbar.html");  // Load navbar
  loadHTML("aside", "assets/sidebar.html");  // Load sidebar
  loadHTML("footer", "assets/footer.html");  // Load footer

  // Sidebar Toggle functionality (if sidebar exists)
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });
  }
});
