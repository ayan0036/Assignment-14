 document.getElementById('regForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent page reload

  // Get input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const messageDiv = document.getElementById('message');

  // Clear old messages
  messageDiv.textContent = '';
  messageDiv.classList.remove('error', 'success');

  // Email format pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate inputs
  if (!name || !email || !phone) {
    messageDiv.textContent = 'Please fill out all fields.';
    messageDiv.classList.add('error');
    return;
  }

  if (!emailPattern.test(email)) {
    messageDiv.textContent = 'Please enter a valid email address.';
    messageDiv.classList.add('error');
    return;
  }

  // Show success message
  messageDiv.textContent = 'Registration successful!';
  messageDiv.classList.add('success');

  // Reset form
  this.reset();
});
