function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var sec = data.getSeconds()
    var min = data.getMinutes()
    var mili = data.getMilliseconds()
    msg.innerHTML = `agora sao ${hora} oras ${min} minut ${sec} segundes e ${mili}`
    if(hora>=0 && hora<12){
        img.src = 'patrick.jpg'
        document.body.style.background = 'yellow'
    } else if(hora>=12 && hora<18){
        img.src = 'masqueico.webp'
        document.body.style.background = 'orange'
    } else{
        img.src = 'pasa.webp'
        document.body.style.background = 'black'
    }
}