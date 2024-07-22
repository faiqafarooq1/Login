// Display welcome message and handle logout
window.addEventListener('load', function () {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser) {
        window.location.href = 'login.html';
    } else {
        document.getElementById('welcomeMessage').innerText = `Hello, ${loggedInUser.username}!`;
    }
});

document.getElementById('logoutButton').addEventListener('click', function () {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
});
