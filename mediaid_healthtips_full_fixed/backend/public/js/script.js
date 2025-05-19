// Main JavaScript for common functionality across pages
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle (if needed)
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Health tips cards (for health-tips.html)
  if (document.getElementById('tipsGrid')) {
    const tips = [
      {
        title: "Stay Hydrated",
        content: "Drink at least 8 glasses of water daily.",
        icon: "fa-glass-water"
      },
      {
        title: "Eat Fruits",
        content: "Include seasonal fruits in your diet.",
        icon: "fa-apple-whole"
      },
      {
        title: "Regular Exercise",
        content: "Aim for 30 minutes of physical activity each day.",
        icon: "fa-person-running"
      },
      {
        title: "Adequate Sleep",
        content: "Get 7-8 hours of quality sleep per night.",
        icon: "fa-moon"
      },
      {
        title: "Hand Hygiene",
        content: "Wash hands frequently with soap for 20 seconds.",
        icon: "fa-hands-bubbles"
      },
      {
        title: "Balanced Diet",
        content: "Include proteins, carbs, and healthy fats in meals.",
        icon: "fa-utensils"
      }
    ];
    
    const tipsGrid = document.getElementById('tipsGrid');
    tips.forEach(tip => {
      const card = document.createElement('div');
      card.className = 'bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow';
      card.innerHTML = `
        <div class="text-green-600 text-3xl mb-4">
          <i class="fas ${tip.icon}"></i>
        </div>
        <h3 class="text-xl font-semibold mb-2">${tip.title}</h3>
        <p class="text-gray-600 dark:text-gray-300">${tip.content}</p>
      `;
      tipsGrid.appendChild(card);
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});