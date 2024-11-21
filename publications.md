<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Explore key publications by Madiha Bencekri, focusing on mobility hubs, travel demand management, and urban accessibility.">
  <title>Publications - Madiha Bencekri</title>
  <link rel="stylesheet" href="assets/css/styles.css">
  <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script> <!-- Font Awesome for icons -->
</head>
<body>
  <!-- Sidebar toggle button -->
  <button class="sidebar-toggle" aria-label="Toggle Sidebar">☰</button>

  <!-- Sidebar -->
  <div class="sidebar">
    <img src="assets/images/profile.jpg" alt="Profile picture of Madiha Bencekri">
    <h1>Madiha Bencekri</h1>
    <p>Ph.D. | Researcher | Industry Expert</p>
    <ul class="menu">
      <li><a href="index.html"><i class="fas fa-home"></i> Home</a></li>
      <li><a href="about.html"><i class="fas fa-user"></i> About</a></li>
      <li><a href="education.html"><i class="fas fa-graduation-cap"></i> Education</a></li>
      <li><a href="experience.html"><i class="fas fa-briefcase"></i> Experience</a></li>
      <li><a href="publications.html" class="active"><i class="fas fa-book"></i> Publications</a></li>
      <li><a href="awards.html"><i class="fas fa-award"></i> News & Awards</a></li>
      <li><a href="languages.html"><i class="fas fa-language"></i> Languages</a></li>
      <li><a href="teaching.html"><i class="fas fa-chalkboard-teacher"></i> Teaching</a></li>
      <li><a href="projects.html"><i class="fas fa-project-diagram"></i> Projects</a></li>
      <li><a href="resume.html"><i class="fas fa-file-alt"></i> Resume</a></li>
      <li><a href="contact.html"><i class="fas fa-envelope"></i> Contact</a></li>
      <li><a href="blog.html"><i class="fas fa-blog"></i> Blog</a></li>
    </ul>
  </div>

  <!-- Main Content -->
  <div class="main-content">
    <h1>Publications</h1>
    <ul class="publications-list">
      <li>
        <h3><i class="fas fa-book-open"></i> Optimizing Carbon Allocation of Mobility Hubs</h3>
        <p>Published in <b>Scientific Reports</b>, 2024</p>
      </li>
      <li>
        <h3><i class="fas fa-chart-line"></i> Travel Demand Management Strategies</h3>
        <p>Published in <b>ICE Proceedings</b>, 2023</p>
      </li>
      <li>
        <h3><i class="fas fa-database"></i> Data-Driven Approaches to Urban Planning</h3>
        <p>Published in <b>Journal of Transportation</b>, 2022</p>
      </li>
      <li>
        <h3><i class="fas fa-robot"></i> Machine Learning for Urban Accessibility</h3>
        <p>Published in <b>IEEE Transactions</b>, 2021</p>
      </li>
    </ul>
    <p>
      <a href="assets/docs/Full_Publication_List.pdf" class="btn" target="_blank">Download Full List</a>
    </p>
  </div>

  <!-- JavaScript for Sidebar Toggle -->
  <script>
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });
  </script>
</body>
</html>
