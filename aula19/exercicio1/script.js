function enviarCadastro(evento) {
    const name = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const Form = document.getElementById('cadastroForm');
    const nova_div = document.createElement('div');
    nova_div.innerHTML = `Nome: ${name}- Email: ${email}- Senha: ${senha}`;
    document.body.appendChild(nova_div);
    Form.reset();
}