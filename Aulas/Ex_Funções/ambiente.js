function parimpar(n){
    if(n%2 == 0){
        return `O numero ${n} é Par`
    } else {
        return `O numero ${n} é Impar`
    }
}

let res = parimpar(2)

console.log(res)

//Recursividade
function fatorial(n){
    if (n == 1){
        return 1
    } else {
        return n * fatorial(n - 1)
    }
}

console.log(fatorial(5))