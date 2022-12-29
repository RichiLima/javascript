let num = [3, 4, 5, 9, 7]
num.push(2)
num.length
num.sort()
console.log(num)
console.log (`Nossos valores são ${num} e possui ${num.length} posições`)

let pos = num.indexOf(9)
if ( pos == -1 ) {
    console.log(`O valor não foi encontrado`)
}else {
    console.log(`o valor está na posição ${pos}`)
}

