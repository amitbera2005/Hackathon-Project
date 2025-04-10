document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Dummy check (you can later replace this with real authentication)
  if (email === "admin@example.com" && password === "password123") {
    window.location.href = "index.html"; // Redirect to homepage
  } else {
    document.getElementById("error-message").textContent = "Invalid email or password.";
  }
});