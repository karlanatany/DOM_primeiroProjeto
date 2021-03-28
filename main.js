   import BotaoConcluir from './componentes/concluiTarefa.js'
   import BotaoDeleta from './componentes/deletaTarefa.js'
   
   const criarTarefa = (evento) => {
    
    evento.preventDefault()
    
    const lista = document.querySelector('#lista')
    const input = document.querySelector('#novo-item')
    const valor = input.value

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${valor}</p>`

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConcluir())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa)
    input.value = " "
}

const novaTarefa = document.querySelector('#botao-novo-item')

novaTarefa.addEventListener('click', criarTarefa)
