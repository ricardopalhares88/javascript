function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#f0d5ae'
    } else if (hora < 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#b37c57'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#253252'
    }
}
