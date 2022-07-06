// style de primer ejercicio
imagen1 = document.querySelector(".imagen1")
imagen1.style.borderRadius = "10%"
imagen1.style.width = "20%"
imagen1.style.marginLeft = "40%"


// funcion primer ejercicio

function disteclick() {
    console.log("dame click")
    const imagen = document.getElementById('imagen');
    console.log(imagen.style.border);    
    if (imagen.style.border === ""){
        imagen.style.border = "solid 3px red";
    } else {
        imagen.style.border = "";
    }
}


// style de segundo ejercicio
primera = document.querySelector(".primera")
primera.style.width = "40%"
primera.style.margin = "10%"
primera.style.borderRadius = "10%"

segunda = document.querySelector(".segunda")
segunda.style.width = "50%"
segunda.style.margin = "10%"
segunda.style.borderRadius = "10%"

tercera = document.querySelector(".tercera")
tercera.style.width = "45%"
tercera.style.margin = "15%"
tercera.style.borderRadius = "10%"

// Funcion segundo ejercicio

let total1 = document.getElementById('total1');


function botontotal() {

    let valor1 = document.getElementById('valor1');
    let input1 = parseInt(valor1.value);

    let valor2 = document.getElementById('valor2');
    let input2 = parseInt(valor2.value);

    let valor3 = document.getElementById('valor3');
    let input3 = parseInt(valor3.value);

    let suma = input1 + input2 + input3;

    if(suma <=10 )  {
        total1.innerHTML = 'Llevas:' + suma + "steckers";
    }
    else{
        total1.innerHTML = "Llevas demasiados stickers";
    }

}

// Funcion tercer ejercicio

function clavecorrecta() {
    const clave1 = document.getElementById('clave1').value;
    const clave2 = document.getElementById('clave2').value;
    const clave3 = document.getElementById('clave3').value;

    const correcta = clave1 + clave2 +clave3;

    const resulpassword = document.getElementById('resulpassword');

    if (correcta === '911' ) {
        resulpassword.innerHTML = 'Password 1 correcta';
    } else if (correcta === '714' ) {
        resulpassword.innerHTML = 'Password 2 correcta';
    } else {
        resulpassword.innerHTML = 'Password incorreta';
    }
}
