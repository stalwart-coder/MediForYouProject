// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  
  // Check for saved user preference or use system preference
  const savedTheme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  // Apply the saved theme
  html.classList.toggle('dark', savedTheme === 'dark');
  updateThemeIcon(savedTheme);
  
  // Toggle theme on button click
  themeToggle.addEventListener('click', () => {
    const isDark = html.classList.toggle('dark');
    const theme = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
  });
  
  // Update the theme icon based on current theme
  function updateThemeIcon(theme) {
    if (themeToggle) {
      const icon = themeToggle.querySelector('i');
      if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
      } else {
        themeToggle.innerHTML = theme === 'dark' ? '☀️' : '🌙';
      }
    }
  }
});