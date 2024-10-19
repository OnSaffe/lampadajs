var lamp = window.document.getElementById('lampada')

function estaQuebrada(){
    return lamp.src.indexOf('quebrada') > -1
}

function Ligar(){
    if (!estaQuebrada()){
    lamp.src = 'on.svg'}
}

function Desligar(){
    if (!estaQuebrada()){
    lamp.src = 'off.svg'}
}

lamp.addEventListener ('click', Quebrar)
function Quebrar(){
    lamp.src = 'quebrada.svg'
}