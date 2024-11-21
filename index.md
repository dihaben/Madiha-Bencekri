<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Welcome to the professional portfolio of Madiha Bencekri, an expert in Transportation Engineering, Urban Planning, and Smart Cities.">
  <title>Home - Madiha Bencekri</title>
  <link rel="stylesheet" href="assets/css/styles.css">
  <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
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
      <li><a href="index.html" class="active"><i class="fas fa-home"></i> Home</a></li>
      <li><a href="about.html"><i class="fas fa-user"></i> About</a></li>
      <li><a href="education.html"><i class="fas fa-graduation-cap"></i> Education</a></li>
      <li><a href="experience.html"><i class="fas fa-briefcase"></i> Experience</a></li>
      <li><a href="publications.html"><i class="fas fa-book"></i> Publications</a></li>
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
    <section class="hero">
      <h1>Welcome to My Portfolio</h1>
      <p>
        I am an expert in Transportation Engineering, Urban Planning, and Smart Cities with years of experience in academia and industry.
      </p>
      <a href="about.html" class="btn">Learn More About Me</a>
    </section>

    <!-- Highlights Section -->
    <section class="highlights">
      <h2>Highlights</h2>
      <div class="highlight-grid">
        <div class="highlight">
          <i class="fas fa-graduation-cap"></i>
          <h3>Ph.D. in Transportation Engineering</h3>
          <p>University of Seoul, 2024</p>
        </div>
        <div class="highlight">
          <i class="fas fa-award"></i>
          <h3>Best Researcher Award</h3>
          <p>University of Seoul, 2023</p>
        </div>
        <div class="highlight">
          <i class="fas fa-project-diagram"></i>
          <h3>Projects</h3>
          <p>Led innovative projects on sustainable mobility and smart city solutions.</p>
        </div>
      </div>
    </section>
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
