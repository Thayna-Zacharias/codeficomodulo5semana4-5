function enviarReserva(evento) {
    const name = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value.replace(/\D/g, '');
    const data = document.getElementById('data').value;
    const Form = document.getElementById('reservaForm');
    const dados_reserva = document.getElementById('dadosReserva');
    if (telefone.length != 10 && telefone.length != 11){
        alert('Digite o telefone corretamente');
        return;
    }
    dados_reserva.innerHTML = `Nome: ${name}- Telefone: ${telefone}- Data: ${data}`;
     
    Form.reset();
}