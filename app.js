
/*Funciones a desarrollar:
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.*/
//let listaNombresSorteados = [];


let ListaAmigosArray = [];
const MuestraHTML = document.getElementById("listaAmigos");
const resultadoHTML = document.getElementById("resultado");
Iniciar();

//Funcion para generar indicaciones
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
       return;
      console.log(texto) 
}



function Iniciar() {
 //Asigna Texto a N1 
    asignarTextoElemento("h1"," Juego Amigo Secreto");
}

function limpiartexto() {
    document.querySelector('#amigos').value = '';
}


function agregarAmigo(){
    const box = document.getElementById("amigos").value;
    if (box==""){
        alert("Ingresa un nombre válido");
    }else {
        ListaAmigosArray.push(box)
        
        MuestraHTML.innerHTML += `<li> ${box}</li>`
        limpiartexto();
    }         
    
}

 function sortearAmigo(){
        
        // Verificacion Lista  console.log(ListaAmigosArray);
        let cantidadAmigos=ListaAmigosArray.length;
        /*   Verificacion cantidad
        console.log(cantidadAmigos);*/
        let sorteado= Math.floor(Math.random()*cantidadAmigos);
        /* Verificacion posicion sorteada
        console.log(sorteado);
        Verificacion Persona sorteada
        console.log(ListaAmigosArray[sorteado]);*/
        resultadoHTML.innerHTML += `<li> El amigo secreto es ${ListaAmigosArray[sorteado]}</li>`;
        asignarTextoElemento("h1","Juego Terminado");
              
          
          setTimeout(() => {  
          location.reload()}, 5000);  
          setTimeout(() => {  
            alert("El juego se reiniciara")}, 3000);  
  
        
    }