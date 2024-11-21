// loader.js - Dynamically loads the sidebar and footer
document.addEventListener("DOMContentLoaded", () => {
  // Function to load HTML content into a selector
  const loadHTML = async (selector, file) => {
    const element = document.querySelector(selector);
    if (element) {
      const response = await fetch(`assets/${file}`);  // Fetch HTML content from assets folder
      if (response.ok) {
        element.innerHTML = await response.text();  // Insert the fetched HTML into the element
      } else {
        console.error(`Failed to load ${file}: ${response.status}`);
      }
    }
  };

  // Load sidebar and footer into their respective placeholders
  loadHTML("#sidebar", "sidebar.html");  // Load sidebar from 'assets/sidebar.html'
  loadHTML("#footer", "footer.html");    // Load footer from 'assets/footer.html'

  // Sidebar Toggle functionality (for mobile or smaller screens)
  const sidebarToggle = document.querySelector('.sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');  // Toggle sidebar visibility
    });
  }

  // Highlight active link in sidebar
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
      sidebarLinks.forEach(link => link.classList.remove('active'));  // Remove active class from all links
      link.classList.add('active');  // Add active class to clicked link
    });
  });
});
