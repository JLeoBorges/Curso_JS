function tab(){
    let valor = document.getElementById('num');
    let res = document.getElementById('res');
    
    if(valor.value.length == 0){
        window.alert('[ERRO] Digite um valor');
    }else
    val = Number(valor.value);
    res.innerHTML = `calculando ...<br>`;
    for(let i = 0; i <= 10; i++){
        let calc = val * i; 
        res.innerHTML += `${val} x ${i} = ${calc}<br> `
    }

}