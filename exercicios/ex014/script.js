function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
    
        img.src = 'manhã.250.jpg'
        document.body.style.background = "#b7c6dd"
    }else if (hora >= 12 && hora < 18) {
        
        img.src = 'tarde.250.jpg'
        document.body.style.background = '#ff9f1d'
    }else {
        
        img.src = 'noite.250.jpg'
        document.body.style.background = '#423454'
        
    }
}

