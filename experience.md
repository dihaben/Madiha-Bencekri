<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Discover the professional experience of Madiha Bencekri, including roles in smart mobility research and urban planning.">
  <title>Experience - Madiha Bencekri</title>
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
      <li><a href="experience.html" class="active"><i class="fas fa-briefcase"></i> Experience</a></li>
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
    <h1>Professional Experience</h1>
    <ul class="experience-list">
      <li>
        <h3>Senior Researcher, Smart Mobility Solutions</h3>
        <p><time datetime="2018">2018</time>–<time datetime="present">Present</time> - University of Seoul</p>
        <p>Developing innovative transportation solutions and leading research projects in urban mobility.</p>
      </li>
      <li>
        <h3>Urban Planner</h3>
        <p><time datetime="2015">2015</time>–<time datetime="2017">2017</time> - City of Rabat, Morocco</p>
        <p>Designed urban transport plans focusing on sustainability and accessibility.</p>
      </li>
    </ul>
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
