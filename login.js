// Hash function to simulate password hashing (use a library like bcrypt in production)
function hashPassword(password) {
    return btoa(password); // Base64 encoding as a placeholder
}

// Register user
document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    // Check if user already exists
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    if (storedUsers.find(user => user.username === username)) {
        alert('Username already taken');
        return;
    }

    // Register user
    const hashedPassword = hashPassword(password);
    storedUsers.push({ username, password: hashedPassword });
    localStorage.setItem('users', JSON.stringify(storedUsers));
    alert('Registration successful');
});

// Authenticate user
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Authenticate user
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(user => user.username === username && user.password === hashPassword(password));
    if (user) {
        alert('Login successful');
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = 'secured.html'; // Redirect to secured page
    } else {
        alert('Invalid username or password');
    }
});

// Auto-login if already logged in
window.addEventListener('load', function () {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        window.location.href = 'secured.html';
    }
});
