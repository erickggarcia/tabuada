let tabuada = document.getElementById('gerar')
tabuada.addEventListener('click', gerar)

function gerar() {
    let numero = document.getElementById('numero')

    if(numero.value.length == 0) {
        alert('Digite um número!')
    } else {
        let num = Number(numero.value)
        let seletor = document.getElementById('seletor')
        seletor.innerHTML = ''
        c = 1
        while(c <= 10){
            let opcao = document.createElement('option')
            opcao.text += `${num} X ${c} = ${num * c}`
            seletor.appendChild(opcao)
            c++
        }
    }
}