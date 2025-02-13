function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        alert('[erro] Verifique os dados digitados e tente novemente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe-m.png')
            }else if(idade < 21){
                img.setAttribute('src','jovem-m.png')
            }else if(idade < 60){
                img.setAttribute('src','adulto-m.png')
            }else{
                img.setAttribute('src','idoso.png')
            }
        }else{
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bebe-f.png')
            }else if(idade < 21){
                img.setAttribute('src','jovem-f.png')
            }else if(idade < 60){
                img.setAttribute('src','adulto-f.png')
            }else{
                img.setAttribute('src','idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
        
}