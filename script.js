//datos del usuario
const user = "cliente";
const pass_comprador = "cliente1234";

//funcion para solicitar datos
function  solicitarDatos(){

    let usuario = prompt("Ingrese su usuario");
    let pass = prompt ("Ingrese su contraseña");


    if (validarDatos (usuario,pass)){

        iniciarCarrito();

    }else{
        
        alert("Usuario y/0 contraseña invalida");
    }
}

//funcion para validar los datos
function validarDatos(usuario,pass){

    if (usuario ===  user && pass === pass_comprador ){

        return true ;

    }else {

        return false ;

    }
}

//funcion para iniciar el carrito
function iniciarCarrito(){

    let lista = "" ;

    let finalizar_carrito = false ;

    while (!finalizar_carrito){

        let cod = prompt("Ingrese codigo de producto");
        let producto = obtenerProducto(cod);

        if (producto){

            console.log("Artículo "+ producto +" agregado con exito.");
            lista += "\n"+producto;

        }else{

            if (cod === null){

                finalizar_carrito = true ;

            }else {

                alert("Ingrese un codigo de artículo valido");
            
            }
        }
    }

    if (lista != ""){

        let resp = confirm ("Desea concretar la compra de :"+lista);
       
        if (resp){

            alert("¡¡Gracias por su compra!!");
        }
    }
}


function obtenerProducto(cod){ 

    let producto  ;
    switch(cod){

        case "1" : 
                    producto = "Casco";
                    break;
        case "2" : 
                    producto = "Luces";
                    break;
        case "3" : 
                    producto = "Pedales" ;
                    break;
        case "4" : 
                    producto = "Guardabarro"
                    break;       
        case "5" : 
                    producto = "Velocimetro" ;
                    break;
        case "6" : 
                    producto = "Linga" ;
                    break;
        case "7" : 
                    producto = "Cadena" ;
                    break;
        default :
                    producto = false;           

    }

    return producto ;  

}

document.addEventListener('DOMContentLoaded', function() {
    solicitarDatos();

});



