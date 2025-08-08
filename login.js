function toggleForm(form) {
  document.getElementById("loginForm").style.display = form === 'login' ? 'block' : 'none';
  document.getElementById("registerForm").style.display = form === 'register' ? 'block' : 'none';
}
