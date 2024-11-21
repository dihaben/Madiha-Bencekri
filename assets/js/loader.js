// loader.js - Dynamically loads the sidebar and footer
document.addEventListener("DOMContentLoaded", () => {
  // Function to load HTML content into a selector
  const loadHTML = async (selector, file) => {
    const element = document.querySelector(selector);
    if (element) {
      const response = await fetch(`assets/${file}`);  // Correct path to fetch files from 'assets' folder
      if (response.ok) {
        element.innerHTML = await response.text();
      } else {
        console.error(`Failed to load ${file}: ${response.status}`);
      }
    }
  };

  // Load sidebar and footer into their respective placeholders
  loadHTML("aside", "sidebar.html");  // Load sidebar from 'assets' folder
  loadHTML("footer", "footer.html");  // Load footer from 'assets' folder

  // Sidebar Toggle functionality
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active'); // Toggle the visibility of the sidebar
    });
  }

  // Highlight active link in sidebar
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
      sidebarLinks.forEach(link => link.classList.remove('active'));  // Remove active class from all links
      link.classList.add('active');  // Add active class to the clicked link
    });
  });
});
