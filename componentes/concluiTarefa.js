const BotaoConcluir = () => {
    const botaoConcluir = document.createElement('button')

    botaoConcluir.classList.add('check-button')
    botaoConcluir.innerText = 'concluir'

    botaoConcluir.addEventListener('click', concluirTarefa)

    return botaoConcluir
}

const concluirTarefa = (evento) => {
    const botaoConcluir = evento.target

    const tarefaCompleta = botaoConcluir.parentElement

    tarefaCompleta.classList.toggle('done')
}

export default BotaoConcluir
