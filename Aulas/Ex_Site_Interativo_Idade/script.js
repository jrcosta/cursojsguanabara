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
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                //Criança
                img.setAttribute('src', 'bebemenino.png')
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'jovemmenino.png')
            } else if(idade < 50) {
                //Adulto
                img.setAttribute('src', 'homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else {
            genero = 'Mulher'
            if(idade >= 0 && idade <= 10){
                //Criança
                img.setAttribute('src', 'bebemenina.png')
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'jovemmenina.png')
            } else if(idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero}  com ${idade} anos.</p>`
        res.appendChild(img)
    }
