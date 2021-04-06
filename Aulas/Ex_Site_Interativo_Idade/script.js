function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0){
        window.alert(`Digite o ano de Nascimento!`)
    } else if(Number(fano.value) > ano) {
        window.alert(`Ainda não Nasceu!`)
    }  else if(Number(fano.value) < 0) {
        window.alert(`Ano inválido!`)
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade Calculada: ${idade}`
    }
    res.innerHTML += `<p>Ano Digitado ${fano.value}</p>`
}