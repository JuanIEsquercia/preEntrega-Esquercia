let cliente , precio , precioFacturado , id , producto 

const IVA = 1.21

function saludar(){

    cliente=prompt('Hola, como es tu nombre?')
    alert('Bienvenido al proceso de registro '+ cliente)

}

function enlistar(){

    let producto=prompt('Nombre del producto')

    precio=parseInt(prompt('Que precio tiene?'))

    alert("El precio es: $ " + precio + ' y el precio facturado es de: $ ' + (precio*IVA))

    console.log('Se añadió correctamente el producto 👉🏻', producto)

    
}

saludar()

let lista = Number(parseInt((prompt('Cuantos productos va a ingresar? Introduzca un numero por favor'))))

for (let i = 1; i <= lista; i++) {
    
    enlistar()

}

while(confirm('Queres registrar algun producto más?')){

    lista = Number(parseInt((prompt('Cuantos productos más?'))))

    for(let i = 1 ; i<= lista; i++){
    enlistar()
    }
}

alert('Muchas gracias por trabajar con nosotros '+ cliente)