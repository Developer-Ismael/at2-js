document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.btn-primary');
    const nomeInput = document.getElementById('nome');
    const idadeInput = document.getElementById('idade');
    const salarioInput = document.getElementById('salario');
    const sexoSelect = document.getElementById('login');
    const container = document.querySelector('.container');

    const dataSection = document.createElement('section');
    dataSection.innerHTML = `<h2>Funcionários Cadastrados</h2>
                             <table class="table table-bordered">
                             <thead>
                                 <tr>
                                     <th>Nome</th>
                                     <th>Idade</th>
                                     <th>Salário</th>
                                     <th>Sexo</th>
                                 </tr>
                             </thead>
                             <tbody id="dadosFuncionarios"></tbody>
                             </table>`;
    container.appendChild(dataSection);

    button.addEventListener('click', function() {
        const nome = nomeInput.value.trim();
        const idade = parseInt(idadeInput.value.trim());
        const salario = parseFloat(salarioInput.value.trim());
        const sexo = sexoSelect.value;

        // Validação simples
        if (!nome || isNaN(idade) || isNaN(salario) || !sexo) {
            alert('Por favor, preencha todos os campos corretamente.');
            return;
        }

        // Criação da nova linha na tabela
        const tbody = document.getElementById('dadosFuncionarios');
        const newRow = tbody.insertRow();
        newRow.insertCell(0).innerText = nome;
        newRow.insertCell(1).innerText = idade;
        newRow.insertCell(2).innerText = `R$ ${salario.toFixed(2)}`;
        newRow.insertCell(3).innerText = sexo === 'M' ? 'Masculino' : sexo === 'F' ? 'Feminino' : 'Outro';

        // Limpar os campos após adicionar
        nomeInput.value = '';
        idadeInput.value = '';
        salarioInput.value = '';
        sexoSelect.value = '';
    });
});
