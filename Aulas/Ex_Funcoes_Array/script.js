var n = []
//var rodou = 0
var dados = document.getElementById('dados')

function listaNumeros() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, Digite um número!')
    } else if(num.value > 100 || num.value < 0 || n.indexOf(num.value) == Number(num.value)){
        window.alert('Número inválido, por favor escolha outro')
    /*} else if(rodou > 0){
        dados.innerHTML.replace*/
    } else {
        n.push(Number(num.value))
        let c = 1
        let item = document.createElement('option')
        item.text = `Adicionado Valor ${num.value}`
        item.value = `tab${c}`
        tab.appendChild(item)
        num.value = ''
    }
} 

function avalN() {
    const somar = (accumulator, currentValue) => accumulator + currentValue;
    dados.innerHTML += `<p>Ao todo temos ${n.length} números cadastrados.</p>`
    dados.innerHTML += `<p>O maior número é ${Math.max.apply(null, n)}.</p>`
    dados.innerHTML += `<p>O menor número é ${Math.min.apply(null, n)}</p>`
    dados.innerHTML += `<p>Somando todos os valores temos ${n.reduce(somar)}</p>`
    dados.innerHTML += `<p>A média dos valores digitados é ${Number(n.reduce(somar))/Number(n.length)}</p>`
    //rodou = 1
}

