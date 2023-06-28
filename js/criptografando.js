function alterarCaixarDeSaida(conteudo){
    let caixaDeSaida = document.getElementById("caixa-de-saida");
    caixaDeSaida.style.transition = "1s all";
    caixaDeSaida.style.background = "#ffffff";
    caixaDeSaida.style.fontFamily = "'Montserrat', sans-serif";
    
    if(window.innerWidth <= 767){
        caixaDeSaida.style.height = "65vh";
    }

    let botaoCopiar = document.getElementById("botaoCopiar");
    botaoCopiar.style.display = "block";
    caixaDeSaida.value = conteudo;
}

function criptografar(){
    let conteudo = document.getElementById("caixa-de-entrada").value;

    if(/^[a-z]+$/.test(conteudo.replace(/\s+/g, "")) && !(/[áàâãäéèêëíïóôõöúü]/.test(conteudo))){
        
        conteudo = conteudo.split("");
        
        for(let cont = 0; cont < conteudo.length; cont++){
            if(conteudo[cont] == "a") conteudo[cont] = "ai";
            else if(conteudo[cont] == "e") conteudo[cont] = "enter";
            else if(conteudo[cont] == "i") conteudo[cont] = "imes";
            else if(conteudo[cont] == "o") conteudo[cont] = "ober";
            else if(conteudo[cont] == "u") conteudo[cont] = "ufat";
        }

        conteudo = conteudo.join("");
        
        if(conteudo.replace(/ /g, "") != ""){
            alterarCaixarDeSaida(conteudo);
        }
    }
}

function descriptografar(){
    let conteudo = document.getElementById("caixa-de-entrada").value;

    if(/^[a-z]+$/.test(conteudo.replace(/\s+/g, "")) && !(/[áàâãäéèêëíïóôõöúü]/.test(conteudo))){
        conteudo = conteudo.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
    
        if(conteudo.replace(/ /g, "") != ""){
            alterarCaixarDeSaida(conteudo);
        } 
    }
}

function copiarConteudo(){
    var valorCopiado = document.getElementById("caixa-de-saida");
    valorCopiado.select();
    document.execCommand("copy");
}

