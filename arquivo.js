var g = document.getElementsByName("gen")
var r = document.getElementById("res")
var bd = document.getElementById("body")

function verificar(){
    if(g[0].checked){
        r.innerText = "Você é um Homem"
        bd.style.background = "blue"
    }
    else if(g[1].checked){
    r.innerText = "Você  é uma Mulher"
    bd.style.background = "#FF00FF"
    }
    else{
        r.innerText = "Você optou por não dizer seu sexo"
        bd.style.background = "gray"
    }}
    function reset(){
    r.innerText = ""
    g[0].checked = false  
    g[1].checked = false
    g[2].checked = false

}