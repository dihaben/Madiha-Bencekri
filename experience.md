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
  {% include sidebar.html %}

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
