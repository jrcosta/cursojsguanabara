let valores = []
let lista = 0
let temItens = 0
let dados = document.getElementById('dados')
let tab = document.getElementById('seltab')
let num = document.getElementById('txtn')

function listaNumeros() {
    if (num.value.length == 0) {
        window.alert('Por favor, Digite um número!')
    } else if(num.value > 100 || num.value < 0 || valores.indexOf(Number(num.value)) > -1){
        window.alert('Número inválido, por favor escolha outro')
    } else if(temItens > 0){
        dados.innerHTML = ''
    } else {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Adicionado Valor ${num.value}`
        tab.appendChild(item)
        num.value = ''
        num.focus()
        lista = 1
    }
} 

function avalN() {
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar.')
    } else {
    const somar = (accumulator, currentValue) => accumulator + currentValue;
    dados.innerHTML += `<p>Ao todo temos ${valores.length} números cadastrados.</p>`
    dados.innerHTML += `<p>O maior número é ${Math.max.apply(null, valores)}.</p>`
    dados.innerHTML += `<p>O menor número é ${Math.min.apply(null, valores)}</p>`
    dados.innerHTML += `<p>Somando todos os valores temos ${valores.reduce(somar)}</p>`
    dados.innerHTML += `<p>A média dos valores digitados é ${Number(valores.reduce(somar))/Number(valores.length)}</p>`
    temItens = 1
    }
}

