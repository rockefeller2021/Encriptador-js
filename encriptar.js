
function encriptar (){

    var txtNormal = document.querySelector("#textoEncriptado").value;
    var txtCryp = txtNormal.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    
    document.querySelector(".txtSalida").value = txtCryp;
    document.querySelector("#textoEncriptado").value;


}


function verificar () {

    var sinAcento = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    var sinMayus = /[A-Z]/g; 
    var sinNumero = /[0-9]/g;   
    var sinDatos="";  

    
    if(textoEncriptado.value.match(sinAcento) || textoEncriptado.value.match(sinMayus) || textoEncriptado.value.match(sinNumero)){


        alert("Dato mal ingresado");
        textoEncriptado.value = "";

        
    }else{

        alert("Continue"); 
    
    }

    return encriptar()

}


var boton1 = document.querySelector("#btn-encriptar"); 
boton1.onclick = verificar;


function desencriptar (){ 

    var txtNormal = document.querySelector("#textoEncriptado").value; 
    var txtCryp = txtNormal.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");

    document.querySelector(".txtSalida").value = txtCryp; 
    document.querySelector("#textoEncriptado").value;

}

var boton2 = document.querySelector("#btn-desencriptar"); 
boton2.onclick = desencriptar;


function copiar(){

    var txtCopiar = document.querySelector(".txtSalida").value;
    navigator.clipboard.writeText(txtCopiar);
    document.querySelector("#textoEncriptado").value="";
    alert("Texto copiado" + " " +  txtCopiar);


}

var botonCopiar = document.querySelector("#btn-copy");
botonCopiar.onclick = copiar;

function pegar(){


    var txtPegar = copiar;


    document.querySelector(".txtSalida").value="";
    alert("Texto pegado");

}



