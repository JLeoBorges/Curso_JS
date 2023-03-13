let num = [6,4,7,2,9];

console.log(num);
num.sort();
for (let pos in num){
    console.log(`posição ${pos} e o valor ${num[pos]}`);
}

let local = num.indexOf(7);
console.log(`valor encontrado na posição${local}`)