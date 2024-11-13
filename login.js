// Hardcoded demo credentials
const demoUsername = "demoUser";
const demoPassword = "demoPass123";

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if entered credentials match the demo credentials
    if (username === demoUsername && password === demoPassword) {
        // Successful login, redirect to the next page (e.g., vehicle details)
        window.location.href = 'vehicle-details.html';
    } else {
        // Invalid credentials, show error message
        document.getElementById('error-message').style.display = 'block';
    }
});
