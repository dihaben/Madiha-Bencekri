// Add Sidebar Active Class
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('.menu a');
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });
});
