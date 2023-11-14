function adicionarTarefa(){
    const tarefa = document.getElementById('tarefa').value;
    const lista_tarefas = document.getElementById('listaTarefas');
    const nova_li = document.createElement('li');
    nova_li.innerHTML = tarefa;
    lista_tarefas.appendChild(nova_li);
    const novo_button = document.createElement('button');
    novo_button.innerHTML = 'remover tarefa';
    nova_li.appendChild(novo_button);
    novo_button.addEventListener('click', function( evento){
        this.parentElement.remove();
    })
}