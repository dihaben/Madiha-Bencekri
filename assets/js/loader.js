// loader.js - Dynamically loads the navbar and footer
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

  // Load the navbar and footer into their respective placeholders
  loadHTML("header", "navbar.html");
  loadHTML("footer", "footer.html");
});
