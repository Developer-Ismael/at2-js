/*At2: Crie uma tela de cadastro de usuários sem 
bootstrap onde devem ser lidos os logins, emails, 
senhas de até 50 registros numa lista no 
sessionStorage. Ao final da leitura, deve-se exibir os 
registros do login e email salvos em uma tabela 
zebrada html. Considere os seguintes critérios: 
• Considere que o usuário não pode informar conteúdo vazio.
• Usuário válido com palavras e não pode ser repetidas 
inclusões. 
• É cadastrado somente senha de 8 caracteres com pelo 
menos 2 números.
• Ao exibir no final todos os campos ficarão bloqueados e o 
botão “REGISTER” é alterado o texto para “UNLOCKER”.
• Leve-se em consideração o layout ao lado. */

document.addEventListener('DOMContentLoaded', () => {
    let usernameInput = document.querySelector('.inputs[placeholder="Username"]');
    let emailInput = document.querySelector('.inputs[placeholder="Email address"]');
    let passwordInput = document.querySelector('.inputs[placeholder="Password"]');
    let confirmPasswordInput = document.querySelector('.inputs[placeholder="Confirm password"]');
    let registerButton = document.querySelector('.btn-register');

    // Carrega usuários do sessionStorage
    function loadUsers() {
        return JSON.parse(sessionStorage.getItem('users')) || [];
    }

    // Valida a senha
    function isValidPassword(password) {
        let regex = /^(?=.*[0-9].*[0-9])(?!.*\s).{8,}$/;
        return regex.test(password);
    }

    // Verifica se o email é único
    function isUniqueEmail(users, email) {
        return !users.some(user => user.email === email);
    }

    // Registra o usuário
    registerButton.addEventListener('click', () => {
        let username = usernameInput.value.trim();
        let email = emailInput.value.trim();
        let password = passwordInput.value;
        let confirmPassword = confirmPasswordInput.value;

        // Valida campos
        if (!username || !email || !password || !confirmPassword) {
            alert('Todos os campos devem ser preenchidos.');
            return;
        }

        if (!isValidPassword(password)) {
            alert('A senha deve ter pelo menos 8 caracteres e conter pelo menos 2 números.');
            return;
        }

        if (password !== confirmPassword) {
            alert('As senhas não correspondem.');
            return;
        }

        let users = loadUsers();

        if (!isUniqueEmail(users, email)) {
            alert('Email já cadastrado.');
            return;
        }

        // Armazena o novo usuário
        users.push({ username, email, password });
        sessionStorage.setItem('users', JSON.stringify(users));

        alert('Usuário cadastrado com sucesso!');
        // Limpa os campos após o registro
        usernameInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
        confirmPasswordInput.value = '';
    });
});