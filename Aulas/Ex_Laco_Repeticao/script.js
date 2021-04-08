function contar() {
    var contar = 0
    var inicio = document.getElementById('cinicio')//Pegando os dados do HTML
    var fim = document.getElementById('cfim')
    var passo = document.getElementById('cpasso')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!')//Valida o inicio, fim e passo.
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(inicio.value)//Jogando em forma de numero em uma variavel para utilizar no for
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido! considerando PASSO 1')//Valida o passo digitado.
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for(var c = i; c <= f; c += p)
                res.innerHTML += `\u{1F916}\u{1F449}${c}`
        } else {
            //Contagem Decrescente
            for(var c = i; c >= f; c -= p)
            res.innerHTML += `\u{1F916}\u{1F449}${c}`//Exibe a contagem.
        }
    }
    res.innerHTML += `  >>\u{1F916}\u{1F44B}`
}