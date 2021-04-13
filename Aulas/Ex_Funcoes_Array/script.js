var n = []

function listaNumeros() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, Digite um número!')
    } else if(num.value > 100 || num.value < 0 || num.value == n.indexOf(n)){
        window.alert('Número inválido, por favor escolha outro')
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
    let dados = document.getElementById('dados')
    dados.innerHTML += `<p>Ao todo temos ${n.length} numeros cadastrados.</p>`
    dados.innerHTML += `<p>O maior número é ${Math.max.apply(null, n)}.</p>`
    dados.innerHTML += `<p>O menor número é ${Math.min.apply(null, n)}</p>`
}
