document.addEventListener('DOMContentLoaded', function() {
  // Sample medicine data
  const medicines = [
    {
      name: "Paracetamol 500mg",
      type: "Pain Reliever",
      price: 5.99,
      inStock: true
    },
    // More medicine data...
  ];

  // Render medicines
  const container = document.querySelector('.medicine-card');
  if (container) {
    // Implementation to render medicines
  }

  // Search functionality
  const searchInput = document.querySelector('input[type="text"]');
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      // Filter medicines based on search term
    });
  }
});