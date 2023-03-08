function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    
    if(fano.value.length == 0 || fano.value > ano){
       window.alert('[ERRO] verifique as informações inseridas');

    }else {
        var sex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '0';
        var img = document.createElement('img')
        if(sex[0].checked){
            genero = 'Masculino';
            if(idade >= 0 && idade <= 12){
                // Criança
                img.setAttribute('src','bebeh.png');
            }else if(idade < 21 ){
                // Jovem
                img.setAttribute('src','jovemh.png');
            }else if(idade >= 21 && idade < 60){
                // Adulto
                img.setAttribute('src','adultoh.png');
            }else{
                // idoso
                img.setAttribute('src','idosoh.png');
            }


        }else if (sex[1].checked){
            genero = 'Feminino';
            if(idade >= 0 && idade <= 12){
                // Criança
                img.setAttribute('src','bebem.png');
            }else if(idade < 21 ){
                // Jovem
                img.setAttribute('src','jovemm.png');
            }else if(idade >= 21 && idade < 60){
                // Adulto
                img.setAttribute('src','adultam.png');
            }else{
                // idoso
                img.setAttribute('src','idosam.png');
            }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = (`Gênero ${genero} com ${idade} anos.`);
        res.appendChild(img);

    }
    

}
