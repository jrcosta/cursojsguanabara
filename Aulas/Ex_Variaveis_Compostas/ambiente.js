let num = [1,4,6,3]
function imprimirVetor(){
    console.log(`Nosso vetor é o ${num}`) //Função para imprimir o vetor todo. 
}
num[4] = 8 //Adicionando um item ao vetor na posição 4.
imprimirVetor()
num.push(22) //Adicionando um item sem definir a posição.
imprimirVetor()
num.sort() //Ordenando o vetor.
imprimirVetor()

for (let pos=0;pos<num.length;pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`) //Imprimindo cada posição do vetor
}

for(let pos in num){
    console.log(`A posição ${pos}A tem o valor ${num[pos]}A`)
}

let pos = num.indexOf(30)//Buscar valor no vetor.
if(pos == -1){
    console.log('O valor não foi encontrado!')//Se retornar -1 é porque o valor não existe no vertor.
} else {
    console.log(`O valor está na posição ${pos}`)
}
