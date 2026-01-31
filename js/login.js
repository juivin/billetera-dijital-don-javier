$(document).ready(function() {
    const validUsers = { 'admin': '1234', 'usuario': 'pass123' };

    $('#loginForm').on('submit', function(e) {
        e.preventDefault();
        const username = $('#username').val().trim();
        const password = $('#password').val();

        if (validUsers[username] && validUsers[username] === password) {
            localStorage.setItem('currentUser', username);
            localStorage.setItem('isLoggedIn', 'true');

            if (!localStorage.getItem('balance')) {
                localStorage.setItem('balance', 1250000);
            }

            window.location.href = 'menu.html';
        } else {
            $('#errorMessage').removeClass('d-none');
        }
    });
});