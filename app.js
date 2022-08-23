
let option = prompt (`Elja Una Opcion:
1:Spider-Man
2:The Incredible Hulk
3:Iron Man
4:Avengers
`)

switch (option) {
    case "1":
        console.log ("Spider-Man")
break
    case"2":
        console.log ("The Incredible Hulk")
break
    case "3":
        console.log ("Iron-Man")
break    
        case "4":
        console.log ("Avengers")
break
default:
    console.log ("No Has Ingresado Una Opción Válida")
}

let x = 0

while (x <= 10) {
    console.log (`El Valor de X es $(x)`)
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