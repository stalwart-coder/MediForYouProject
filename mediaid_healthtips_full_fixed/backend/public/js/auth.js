// Authentication functionality
document.addEventListener('DOMContentLoaded', function() {
  const signinForm = document.getElementById('signinForm');
  const signupForm = document.getElementById('signupForm');
  
  if (signinForm) {
    signinForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = this.email.value;
      const password = this.password.value;
      const remember = this.remember.checked;
      
      // Simulate authentication
      console.log('Signing in with:', { email, password, remember });
      
      // Show loading state
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Signing In...';
      submitBtn.disabled = true;
      
      // Simulate API call
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // For demo purposes, just redirect to home
        window.location.href = 'index.html';
      }, 1500);
    });
  }
  
  if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = this.name.value;
      const email = this.email.value;
      const password = this.password.value;
      const terms = this.terms.checked;
      
      // Simulate registration
      console.log('Signing up with:', { name, email, password, terms });
      
      // Show loading state
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Creating Account...';
      submitBtn.disabled = true;
      
      // Simulate API call
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // For demo purposes, just redirect to home
        window.location.href = 'index.html';
      }, 1500);
    });
  }
});