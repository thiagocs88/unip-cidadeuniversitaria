function hello(){
    alert("Hello world!!!");
}


function paragrafo(){
    document.getElementById("teste").innerHTML = "Esse parágrafo foi escrito via função em JavaScript.";
}

function nao_clique(){
    document.getElementById("resposta").innerHTML = "Poxa cara, eu falei pra não clicar ali!!! :(";
}

function apertar(){
    document.getElementById("cores").style.color = "red";
}

function soltar(){
    document.getElementById("cores").style.color = "blue";
}

function propriedades(){
    document.getElementById("multiplo").style.fontSize = "3em";
    document.getElementById("multiplo").style.color = "red";
    document.getElementById("multiplo").style.backgroundColor= "yellow";
}

function somar(){
    document.getElementById("resultado").value = parseFloat(document.getElementById("numero1").value) + parseFloat(document.getElementById("numero2").value)

    document.getElementById("resultado").style.backgroundColor = "green";

    document.getElementById("resultado").style.color = "blue";
}