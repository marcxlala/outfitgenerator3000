//variables
//let porque las descripciones de las prendas serán más específicas más adelante

let prendaInferior1 = "falda negra"
let prendaInferior2 = "jean azul"
let prendaSuperior1 = "camisa blanca"
let prendaSuperior2 = "camiseta negra"
let abrigo1 = "casaca  negra"
let zapatos1 = "converse blancas"
let zapatos2 = "Doc Martens"

//prompt

const temperatura = prompt("¿Cuántos grados hacen?")
parseInt(temperatura)
console.log("hacen" + " " + temperatura + " grados")

//condicional

if (temperatura >= 20){
    alert(prendaInferior1 + " " + prendaSuperior1 + " "+ zapatos1)
}

else if (temperatura < 20){
    alert( prendaInferior2 + " " + prendaSuperior2 + " " + abrigo1 + " " + zapatos2)
    
}

else if (temperatura > 40){
    alert("¡Quédate en casa y toma agua!")
}



