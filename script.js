// EJERCICIO 1
var topping = ["Oreo", "KitKat", "Kinder"]
var precio = [10, 15, 25]
var precio_final
var helado= 2000

if (topping=[0]) {
    console.log("El precio es $"+" "+ precio[0])
}
if (topping=[1]){
    console.log("El precio es $"+" "+ precio[1])
}
if (topping=[2]){
    console.log("El precio es $"+" "+ precio[2])
}
if (topping!=[1,2,3]){
    console.log("No tenemos ese producto")
}
if(topping=[0]){
    precio_final= (helado + precio[0])
    console.log("El helado cuesta $"+precio_final)
}
if(topping=[1]){
    precio_final= (helado + precio[1])
    console.log("El helado cuesta $"+precio_final)
}
if(topping=[2]){
    precio_final= (helado + precio[2])
    console.log("El helado cuesta $"+precio_final)
}

// EJERCICIO 2
let pedido= "p3escado"
switch (pedido) {
    case 'carne':
    console.log("Se le ofrece vino tinto");
    break;
    case 'pescado':
    console.log("Se le ofrece vino blanco");
    break;
    case 'verdura':
    console.log("Se le ofrece agua");
    break;
    default:
    console.log("elija carne, pescado o verdura.")
}

// EJERCICIO 3
let nombre= ["Luis", "Mariela", "Renata", "Jose"]
// console.log(nombre)
// console.log(nombre[0])
// console.log(nombre[1])
// console.log(nombre[2])
// console.log(nombre[3])
// console.log("Cantidad de nombres"+" "+nombre.length)
for(let i=0; i< nombre.length; i++){
    console.log(nombre[i])
    }
// let contador="11"
// while (contador > 0){
//     console.log("Numero menor que 11");
//     contador=contador-1
// }

// EJERCICIO 4
let nombre1= ["👽", "Luis", "Mariela", "Renata", "Jose","😎"]

for(let i=0; i< nombre1.length; i++){
    console.log(nombre1[i])
    }

// EJERCICIO 5
var numin= 4
while (numin <11){
    console.log ("Numero menor que once");
    break
    }
    
    

