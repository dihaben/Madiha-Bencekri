<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Explore recent articles and insights by Madiha Bencekri on sustainable mobility, urban planning, and data-driven solutions.">
  <title>Blog - Madiha Bencekri</title>
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
      <li><a href="publications.html"><i class="fas fa-book"></i> Publications</a></li>
      <li><a href="awards.html"><i class="fas fa-award"></i> News & Awards</a></li>
      <li><a href="languages.html"><i class="fas fa-language"></i> Languages</a></li>
      <li><a href="teaching.html"><i class="fas fa-chalkboard-teacher"></i> Teaching</a></li>
      <li><a href="projects.html"><i class="fas fa-project-diagram"></i> Projects</a></li>
      <li><a href="resume.html"><i class="fas fa-file-alt"></i> Resume</a></li>
      <li><a href="contact.html"><i class="fas fa-envelope"></i> Contact</a></li>
      <li><a href="blog.html" class="active"><i class="fas fa-blog"></i> Blog</a></li>
    </ul>
  </div>

  <!-- Main Content -->
  <div class="main-content">
    <h1>Blog</h1>
    <p>Here are some of my recent articles and insights:</p>

    <div class="blog-posts">
      <!-- Blog Post 1 -->
      <article class="blog-post">
        <h2><a href="https://www.linkedin.com/article/example-1" target="_blank">The Future of Sustainable Mobility</a></h2>
        <p>Exploring the role of smart cities and emerging technologies in sustainable urban mobility.</p>
        <a href="https://www.linkedin.com/article/example-1" target="_blank" class="btn">Read More</a>
      </article>

      <!-- Blog Post 2 -->
      <article class="blog-post">
        <h2><a href="https://www.linkedin.com/article/example-2" target="_blank">Data-Driven Urban Planning</a></h2>
        <p>How data analytics and machine learning are shaping the next generation of urban planning solutions.</p>
        <a href="https://www.linkedin.com/article/example-2" target="_blank" class="btn">Read More</a>
      </article>

      <!-- Blog Post 3 -->
      <article class="blog-post">
        <h2><a href="https://www.linkedin.com/article/example-3" target="_blank">Challenges in Public Transit Post-COVID</a></h2>
        <p>An analysis of how public transit systems can adapt to changing commuter needs post-pandemic.</p>
        <a href="https://www.linkedin.com/article/example-3" target="_blank" class="btn">Read More</a>
      </article>
    </div>

    <p>
      <a href="https://www.linkedin.com/in/madihabencekri/articles" target="_blank" class="btn">Discover More on LinkedIn</a>
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
