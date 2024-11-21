// loader.js - Dynamically loads the sidebar and footer
document.addEventListener("DOMContentLoaded", () => {
  // Load the sidebar and footer directly without dynamic fetching
  const sidebar = document.querySelector('.sidebar');
  const footer = document.querySelector('footer');

  // Ensure sidebar and footer exist before manipulating them
  if (sidebar && footer) {
    // Highlight active link in sidebar
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(link => {
      link.addEventListener('click', () => {
        // Remove active class from all links
        sidebarLinks.forEach(link => link.classList.remove('active'));
        // Add active class to the clicked link
        link.classList.add('active');
      });
    });

    // Sidebar Toggle functionality (optional, if sidebar toggle is needed)
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    if (sidebarToggle) {
      sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active'); // Toggle sidebar visibility
      });
    }
  } else {
    console.error('Sidebar or footer elements are missing.');
  }
});
