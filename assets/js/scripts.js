// Sidebar Toggle Functionality
const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

sidebarToggle.addEventListener('click', () => {
  // Add or remove the 'active' class to slide the sidebar in or out
  sidebar.classList.toggle('active');

  // Toggle the aria-expanded attribute for accessibility
  const expanded = sidebarToggle.getAttribute('aria-expanded') === 'true';
  sidebarToggle.setAttribute('aria-expanded', !expanded);
});


// Smooth Scrolling for Navigation Links
document.querySelectorAll('.menu a[href^="#"]').forEach(anchor => {
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
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (!name || !email || !message) {
      e.preventDefault();
      alert("Please fill out all fields before submitting the form.");
    }
  });
}

// Highlight Active Page in Sidebar
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();
  const menuLinks = document.querySelectorAll(".menu a");

  menuLinks.forEach(link => {
    const linkPath = link.getAttribute("href");
    if (currentPage === linkPath || (currentPage === "" && linkPath === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// Highlight Sidebar Section on Scroll
const sections = document.querySelectorAll(".main-content h1, .main-content h2");
const observerOptions = {
  root: null,
  threshold: 0.5
};

const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      document.querySelectorAll('.menu a').forEach(link => {
        if (link.getAttribute("href").includes(`#${id}`)) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  });
};

if (sections.length) {
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  sections.forEach(section => observer.observe(section));
}
