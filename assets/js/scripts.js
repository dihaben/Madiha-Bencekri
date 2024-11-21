// Collapsible Sidebar for Mobile
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".sidebar-toggle");
  const sidebar = document.querySelector(".sidebar");

  toggleButton.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Back-to-Top Button
const backToTopButton = document.createElement("button");
backToTopButton.innerHTML = "↑";
backToTopButton.className = "back-to-top";
document.body.appendChild(backToTopButton);

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
});

backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Contact Form Validation
document.querySelector("form").addEventListener("submit", function (e) {
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  if (!name || !email || !message) {
    e.preventDefault();
    alert("Please fill out all fields before submitting the form.");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".sidebar-toggle");
  const sidebar = document.querySelector(".sidebar");

  toggleButton.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });
});
 
