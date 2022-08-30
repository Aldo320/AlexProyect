let option = prompt (`Elja Tu Marca de Calzado Favorita:
1:Nike
2:Adidas
3:Puma
4:Reebok
`)

switch (option) {
    case "1":
        console.log ("Nike")
break
    case"2":
        console.log ("Adidas")
break
    case "3":
        console.log ("Puma")
break    
        case "4":
        console.log ("Reebok")
break
default:
    console.log ("No Has Ingresado Una Opción Válida")
} 

let x = 0

while (x <= 10) {
    console.log (`El Valor de X es ${x}`)
    x++
}

let entrada = prompt("Ingrese un texto o ESC para interrumpir")

let texto =" "

while (entrada !="ESC"&& entrada != "esc") {
    texto+=entrada + " "
    entrada = prompt("Ingrese un texto o ESC para interrumpir")
}



let numero = Number(prompt("Ingrese un numero"));

for (let i = 1; i <= 20; i++) {
  let resultado = numero * i
  alert(`${numero} x ${i} = ${resultado}`);}


  function solicitarNombre() {
    let Nombre=prompt ("Ingrese Su Nombre")
    console.log (`El Nombre De Usuario Es: ${Nombre}`) 
  }
  
solicitarNombre ()

function saludar (nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}`)
} 

saludar ()


function iniciarApp() {
    console.log("Iniciando App...")

}

iniciarApp()


function segundaFuncion (){
    console.log("Desde la segunda función") 
}

    segundaFuncion()

    
function usuarioautenticado (){
    console.log("Autenticando Usuario... Espere...")
    console.log("Usuario Autenticado Exitosamente")
}

    usuarioautenticado()


let primerNumero = 0
    let segundoNumero = 0

    function calculadora (primerNumero, segundoNumero, operacion)
        switch (operacion){
            case "+"
            return primerNumero + segundoNumero;
            break
            case "-"
            return primerNumero - segundoNumero;
            break
            case "*"
            return primerNumero * segundoNumero;
            break
            case "/"
            return primerNumero / segundoNumero
            break
            default
            return 0
            break
        }
            
        console.log calculadora((20, 30, "+"))

  