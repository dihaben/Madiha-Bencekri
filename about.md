<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Learn more about Madiha Bencekri, a Ph.D. researcher with expertise in transportation engineering, sustainable mobility, and smart city planning.">
  <title>About Me - Madiha Bencekri</title>
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
      <li><a href="about.html" class="active"><i class="fas fa-user"></i> About</a></li>
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
    <h1>About Me</h1>
    <p>
      Hello! My name is Madiha Bencekri. I hold a Ph.D. in Transportation Engineering and have a passion for designing sustainable mobility solutions and smart cities. With extensive experience in academia and industry, I bridge the gap between innovative research and real-world implementation.
    </p>
    <p>
      My expertise lies in transportation systems, urban planning, and leveraging data-driven approaches like machine learning to tackle mobility challenges.
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
