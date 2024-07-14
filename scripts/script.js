    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const registerButton = document.getElementById('register-button');
    const loginButton = document.getElementById('login-button');
    const showLoginLink = document.getElementById('show-login');
    const showRegisterLink = document.getElementById('show-register');

    const regUsername = document.getElementById('reg-username');
    const regEmail = document.getElementById('reg-email');
    const regPassword = document.getElementById('reg-password');
    const loginUsername = document.getElementById('login-username');
    const loginPassword = document.getElementById('login-password');

    function showLoginForm(event) {
        event.preventDefault();
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    }

    function showRegisterForm(event) {
        event.preventDefault();
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showError(input, message) {
        const errorElement = document.getElementById(`${input.id}-error`);
        input.classList.add('error');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    function clearError(input) {
        const errorElement = document.getElementById(`${input.id}-error`);
        input.classList.remove('error');
        errorElement.style.display = 'none';
    }

    function validateInput(input) {
        if (input.value.trim() === "") {
            showError(input, 'Заполните поле');
        } else {
            if (input.type === 'email' && !validateEmail(input.value)) {
                showError(input, 'Введите корректный адрес электронной почты');
            } else {
                clearError(input);
            }
        }
    }

    function register() {
        const username = regUsername.value.trim();
        const email = regEmail.value.trim();
        const password = regPassword.value.trim();
        let valid = true;

        if (username === "") {
            showError(regUsername, 'Заполните поле');
            valid = false;
        } else {
            clearError(regUsername);
        }

        if (email === "") {
            showError(regEmail, 'Заполните поле');
            valid = false;
        } else if (!validateEmail(email)) {
            showError(regEmail, 'Введите корректный адрес электронной почты');
            valid = false;
        } else {
            clearError(regEmail);
        }

        if (password === "") {
            showError(regPassword, 'Заполните поле');
            valid = false;
        } else {
            clearError(regPassword);
        }

        if (valid) {
            alert('Регистрация прошла успешно!');
            showLoginForm(new Event('click'));
        }
    }

    function login() {
        const username = loginUsername.value.trim();
        const password = loginPassword.value.trim();
        let valid = true;

        if (username === "") {
            showError(loginUsername, 'Заполните поле');
            valid = false;
        } else {
            clearError(loginUsername);
        }

        if (password === "") {
            showError(loginPassword, 'Заполните поле');
            valid = false;
        } else {
            clearError(loginPassword);
        }

        if (valid) {
            if (username === 'testuser' && password === 'password') {
                alert('Вход выполнен успешно!');
            } else {
                showError(loginPassword, 'Неверное имя пользователя или пароль');
            }
        }
    }

    showLoginLink.addEventListener('click', showLoginForm);
    showRegisterLink.addEventListener('click', showRegisterForm);
    registerButton.addEventListener('click', register);
    loginButton.addEventListener('click', login);

    regUsername.addEventListener('blur', function() { validateInput(regUsername); });
    regEmail.addEventListener('blur', function() { validateInput(regEmail); });
    regPassword.addEventListener('blur', function() { validateInput(regPassword); });
    loginUsername.addEventListener('blur', function() { validateInput(loginUsername); });
    loginPassword.addEventListener('blur', function() { validateInput(loginPassword); });
