<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Explore the academic journey of Madiha Bencekri, including her Ph.D. in Transportation Engineering and her Civil Engineering background.">
  <title>Education - Madiha Bencekri</title>
  <link rel="stylesheet" href="assets/css/styles.css">
  <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script> <!-- Font Awesome for icons -->
</head>
<body>
  {% include sidebar.html %}

  <!-- Main Content -->
  <div class="main-content">
    <h1>Education</h1>
    <ul class="education-list">
      <li>
        <h3>Ph.D. in Transportation Engineering</h3>
        <p><time datetime="2024">2024</time> - University of Seoul</p>
      </li>
      <li>
        <h3>Master's in Urban and Regional Development</h3>
        <p><time datetime="2017">2017</time> - University of Seoul</p>
      </li>
      <li>
        <h3>Bachelor's in Civil Engineering</h3>
        <p><time datetime="2014">2014</time> - University of Rabat, Morocco</p>
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
