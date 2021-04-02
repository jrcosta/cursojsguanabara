var agora = new Date()
var diaSem = agora.getDay()
var diaTxt

switch (diaSem) {
    case 0:
        diaTxt = 'Domingo'
        break
    case 1:
        diaTxt = 'Segunda'
        break
    case 2:
        diaTxt = 'Terça'
        break
    case 3:
        diaTxt = 'Quarta'
        break 
    case 4:
        diaTxt = 'Quinta'
        break
    case 5:
        diaTxt = 'Sexta'
        break        
    case 6:
        diaTxt = 'Sábado'
        break   
}

console.log(diaTxt)