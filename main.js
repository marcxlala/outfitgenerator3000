//variables

const prendaInferior1 = "falda negra"
const prendaInferior2 = "jean azul"
const prendaInferior3 = "pantalón rosado"
const prendaInferior4 = "falda blanca"
const prendaSuperior1 = "camisa blanca"
const prendaSuperior2 = "camiseta negra"
const prendaSuperior3 = "blusa rosada"
const abrigo1 = "casaca  negra"
const abrigo2 = "Tapado blanco"
const abrigo3 = "Tapado marrón"
const zapatos1 = "converse blancas"
const zapatos2 = "Doc Martens"
const zapatos3 = "cowboy boots marrones"

let temperatura = parseFloat()
let color = " "

//objetos

const outfitFrio = {
    prendaInferior2: "jean azul",
    prendaSuperior2: "camiseta negra",
    abrigo1: "casaca negra",
    zapatos2: "Doc Martens",
}

const outfitCalor = {
    prendaInferior1: "falda negra",
    prendaSuperior1: "camisa blanca",
    zapatos1: "converse blancas"
}

const outfitBlanco = {
    prendaInferior4:"falda blanca",
    prendaSuperior1: "camisa blanca",
    zapatos3: "cowboy boots marrones"
}

const outfitNegro = {
    prendaInferior1: "falda negra",
    prendaSuperior2: "camiseta negra",
    zapatos2: "Doc Martens"
}

const outfitRosado = {
    prendaInferior3: "pantalón rosado",
    prendaSuperior3:"blusa rosada",
    zapatos1: "converse blancas"
}


//arrays
const prendasInferiores = ["falda negra", "jean azul", "pantalón rosado", "falda blanca"];
const prendasSuperiores =  ["camisa blanca", "camiseta negra", "blusa rosada"];
const zapatos = ["converse blancas", "Doc Martens", "cowboy boots marrones"];
const abrigos = ["casaca negra", "tapado blanco", "tapado marrón"];


//funciones

function temperaturaFuncion (){

    temperatura = parseFloat(prompt("¿Cuántos grados hacen?"))

    do{
        switch(temperatura){
            case temperatura >= 20:
                alert(outfitCalor["prendaInferior1"] + " " + outfitCalor["prendaSuperior1"] + " " + outfitCalor["zapatos1"]);

            case temperatura < 20:
                alert(outfitFrio["prendaInferior2"] + " " + OutfitFrio["prendaSuperior2"] + " " + OutfitFrio["abrigo1"] + " " + OutfitFrio["zapatos2"]);

            case temperatura > 40:
                alert("¡Quédate en casa y toma agua!");

            default:
                alert("Ingresa una temperatura válida");
        }
    }
    while(temperatura != parseFloat)
}


function colorFuncion () {
    color = prompt("Elige un color")

    do{
        switch(color){
            case "blanco":
                alert(outfitBlanco["prendaInferior4"] + " " + outfitBlanco["prendaSuperior1"] + " " + outfitBlanco["zapatos3"])
            break;

            case "negro":
                alert(outfitNegro["prendaInferior1"] + " " + outfitNegro["prendaSuperior2"] + " " + outfitNegro["zapatos2"])
            break;

            case "rosado":
                alert(outfitRosado["prendaInferior3"] + " " + outfitRosado["prendaSuperior3"] + " " + outfitRosado["zapatos1"])
            break;

            default:
                alert("Ingresa un color válido")
        }
    }
    while(color != "blanco" & color != "negro" & color != "rosado")
}

function outfit(prendaInferior, prendaSuperior, zapatos){
    this.prendaInferior = " ";
    this.prendaSuperior = " ";
    this.zapatos = " ";
}


//prompt

let opcion = " "

do{
    opcion = prompt("¿Quieres elegir por color o por temperatura?")
    console.log("eligió" + " "+  opcion)

    switch(opcion){

    //temperatura
    case "temperatura":
        console.log("hacen" + " " + temperatura + " grados")
        temperaturaFuncion ()
    break;

    //color
    case "color":
        console.log("Eligió el color" + color)
        colorFuncion ()
    break;

    default: 
    alert("Ingresa una opción válida")
    }
}
while(opcion != "temperatura" & opcion != "color")