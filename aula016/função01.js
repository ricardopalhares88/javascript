function parimp(n) {
    if(n%2 == 0) {
        return 'par' 
    }else{
        return 'impar'
    }
}

let res = parimp(11)
console.log(`Este número é ${res}`)

/*Para mostrar o resultado também poderia fazer assim;

console.log(parimpar(11))
*/