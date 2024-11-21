<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Contact Madiha Bencekri via email, phone, or LinkedIn. Let's connect!">
  <title>Contact - Madiha Bencekri</title>
  <link rel="stylesheet" href="assets/css/styles.css">
  <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script> <!-- Font Awesome for icons -->
</head>
<body>
  {% include sidebar.html %}

  <!-- Main Content -->
  <div class="main-content">
    <h1>Contact</h1>
    <p>You can reach me through the following channels:</p>
    <ul>
      <li><b>Email:</b> <a href="mailto:madiha.bencekri@example.com">madiha.bencekri@example.com</a></li>
      <li><b>Phone:</b> <a href="tel:+821012345678">+82-10-1234-5678</a></li>
      <li><b>LinkedIn:</b> <a href="https://linkedin.com/in/madihabencekri" target="_blank">linkedin.com/in/madihabencekri</a></li>
    </ul>
    <p>
      <b>Or feel free to use the form below:</b>
    </p>
    <form action="https://formspree.io/f/<your-form-id>" method="POST" class="contact-form">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>

      <label for="message">Message:</label>
      <textarea id="message" name="message" rows="5" required></textarea>

      <button type="submit" class="btn">Send Message</button>
    </form>
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
