let btnAddTarefa = document.querySelector('#adicionar-tarefa');
let tarefas = document.querySelector('#tarefas');
let inputTarefa = document.getElementById('tarefa-digitada');
let botoesAdd = document.querySelectorAll('.botao-tarefa');



const criarTarefaComEnter = (event) => {

    if (event.keyCode == 13 || event.type == "click") {
        let valorDigitado = inputTarefa.value
        if (valorDigitado == "") {
            alert("Voce deve digitar um valor");
            return
        }

        inputTarefa.value = ""
        let tarefaNova = `<div class="col-md-4">
<div class="card-tarefa">
    <div class="texto-tarefa">
        ${valorDigitado}
    </div>
    <div class="botao-tarefa">
         <img src="./imagens/chek.png" width="32" alt="tarefa ok" title="tarefa ae">
    </div>
</div>
</div> `
        tarefas.insertAdjacentHTML('beforeend', tarefaNova)

        let objTarefaNova = tarefas.lastElementChild
        let btnCheckTarefaNova = objTarefaNova.lastElementChild.lastElementChild.onclick = (event) => {
            event.target.parentNode.parentNode.parentNode.remove()
        }

    }
}
inputTarefa.addEventListener('keypress', criarTarefaComEnter)
btnAddTarefa.addEventListener('click', criarTarefaComEnter)