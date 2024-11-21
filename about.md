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
  {% include sidebar.html %}

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
