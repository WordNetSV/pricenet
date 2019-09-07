// generamos un evento click y keyup para cada elemento input con la clase .input
var input=document.querySelectorAll(".input");
input.forEach(function(e) {
e.addEventListener("click",multiplica);
e.addEventListener("keyup",multiplica);
});

// funcion que genera la multiplicacion
function multiplica() {

// nos posicionamos en el tr del producto
var tr=this.closest("tr");

var total=1;

// recorremos todos los elementos del tr que tienen la clase .input
var inputs=tr.querySelectorAll(".input");
inputs.forEach(function(e) {
total*=e.value;
});

// mostramos el total con dos decimales
tr.querySelector(".total").value=total.toFixed(2);

// indicamos que calcule el total
calcularTotal(this.closest("table"));
}

// funcion que calcula la suma total de los productos
function calcularTotal(e) {
var total=0;

// obtenemos todos los totales y los sumamos
var totales=e.querySelectorAll(".total");
totales.forEach(function(e) {
total+=parseFloat(e.value);
});

// mostramos la suma total con dos decimales
e.getElementsByClassName("totales")[0].value=total.toFixed(2);
}

//3 
function Suma() 
{
var valorA = parseInt(prompt('Dame el valor A:'));
var valorB = parseInt(prompt('Dame valor B:'));

var resultado=valorA + valorB; 
document.getElementById('resultado').value = (valorA+"  +  " + valorB + " = " + resultado);

}

function mostrar(){
    var archivo = document.getElementById("file").files[0];
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(archivo );
      reader.onloadend = function () {
        document.getElementById("img").src = reader.result;
      }
    }
  }

  function mostrar2(){
    var archivo2 = document.getElementById("file2").files[0];
    var reader = new FileReader();
    if (file2) {
      reader.readAsDataURL(archivo2 );
      reader.onloadend = function () {
        document.getElementById("img2").src = reader.result;
      }
    }
  }

  function mostrar3(){
    var archivo3 = document.getElementById("file3").files[0];
    var reader = new FileReader();
    if (file3) {
      reader.readAsDataURL(archivo3 );
      reader.onloadend = function () {
        document.getElementById("img3").src = reader.result;
      }
    }
  }

  function mostrar4(){
    var archivo4 = document.getElementById("file4").files[0];
    var reader = new FileReader();
    if (file4) {
      reader.readAsDataURL(archivo4 );
      reader.onloadend = function () {
        document.getElementById("img4").src = reader.result;
      }
    }
  }

  function mostrar5(){
    var archivo5 = document.getElementById("file5").files[0];
    var reader = new FileReader();
    if (file5) {
      reader.readAsDataURL(archivo5 );
      reader.onloadend = function () {
        document.getElementById("img5").src = reader.result;
      }
    }
  }

 
  function mostrar6(){
    var archivo6 = document.getElementById("file6").files[0];
    var reader = new FileReader();
    if (file6) {
      reader.readAsDataURL(archivo6 );
      reader.onloadend = function () {
        document.getElementById("img6").src = reader.result;
      }
    }
  } 

  function imprimir(){
    window.print();
}

function myFunction() {
    var x = document.getElementById("t1");
    var x2 = document.getElementById("des6");
    var x3 = document.getElementById("des2");
    var x4 = document.getElementById("des7");
    var xi = document.getElementById("img");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    if (x2.style.display === "none") {
        x2.style.display = "block";
    } else {
        x2.style.display = "none";
    }

    if (x3.style.display === "none") {
        x3.style.display = "block";
    } else {
        x3.style.display = "none";
    }

    if (x4.style.display === "none") {
        x4.style.display = "block";
    } else {
        x4.style.display = "none";
    }

    if (xi.style.display === "none") {
        xi.style.display = "block";
    } else {
        xi.style.display = "none";
    }
    
}

function myFunction2() {
    var x6 = document.getElementById("t");
    var x7 = document.getElementById("tex2");
    var x8 = document.getElementById("can2");
    var x9 = document.getElementById("des8");
    var xi2 = document.getElementById("img2");

    if (x6.style.display === "none") {
        x6.style.display = "block";
    } else {
        x6.style.display = "none";
    }

    if (x7.style.display === "none") {
        x7.style.display = "block";
    } else {
        x7.style.display = "none";
    }

    if (x8.style.display === "none") {
        x8.style.display = "block";
    } else {
        x8.style.display = "none";
    }

    if (x9.style.display === "none") {
        x9.style.display = "block";
    } else {
        x9.style.display = "none";
    }


    if (xi2.style.display === "none") {
        xi2.style.display = "block";
    } else {
        xi2.style.display = "none";
    }
    
}

function myFunction3() {
    var x10 = document.getElementById("tex24");
    var x12 = document.getElementById("can24");
    var x13 = document.getElementById("des88");
    var x14 = document.getElementById("des55");
    var xi3 = document.getElementById("img3");
    if (x10.style.display === "none") {
        x10.style.display = "block";
    } else {
        x10.style.display = "none";
    }

    if (x12.style.display === "none") {
        x12.style.display = "block";
    } else {
        x12.style.display = "none";
    }

    if (x13.style.display === "none") {
        x13.style.display = "block";
    } else {
        x13.style.display = "none";
    }

    if (x14.style.display === "none") {
        x14.style.display = "block";
    } else {
        x14.style.display = "none";
    }

    if (xi3.style.display === "none") {
        xi3.style.display = "block";
    } else {
        xi3.style.display = "none";
    }

    
}


function myFunction4() {
    var x15 = document.getElementById("total2");
    var x16 = document.getElementById("text6");
    var x17 = document.getElementById("total");
    var x14 = document.getElementById("total3");
    var x144 = document.getElementById("total4");
    var xi6 = document.getElementById("img6");

    if (x15.style.display === "none") {
        x15.style.display = "block";
    } else {
        x15.style.display = "none";
    }

    if (x16.style.display === "none") {
        x16.style.display = "block";
    } else {
        x16.style.display = "none";
    }

    if (x17.style.display === "none") {
        x17.style.display = "block";
    } else {
        x17.style.display = "none";
    }

    if (x14.style.display === "none") {
        x14.style.display = "block";
    } else {
        x14.style.display = "none";
    }

    if (xi6.style.display === "none") {
        xi6.style.display = "block";
    } else {
        xi6.style.display = "none";
    }

    if (x144.style.display === "none") {
        x144.style.display = "block";
    } else {
        x144.style.display = "none";
    }


    
}


// function myFunction5() {
//     var x18 = document.getElementById("");
//     var x19 = document.getElementById("");
//     var x20 = document.getElementById("total3");
//     var x21 = document.getElementById("total4");
//     var xi8 = document.getElementById("img5");

//     if (x18.style.display === "none") {
//         x18.style.display = "block";
//     } else {
//         x18.style.display = "none";
//     }

//     if (x19.style.display === "none") {
//         x19.style.display = "block";
//     } else {
//         x19.style.display = "none";
//     }

//     if (x20.style.display === "none") {
//         x20.style.display = "block";
//     } else {
//         x20.style.display = "none";
//     }

//     if (x21.style.display === "none") {
//         x21.style.display = "block";
//     } else {
//         x21.style.display = "none";
//     }

    
//     if (xi8.style.display === "none") {
//         xi8.style.display = "block";
//     } else {
//         xi8.style.display = "none";
//     }
    
// }

function myFunction6() {
    var x22 = document.getElementById("des555");
    var x23 = document.getElementById("tex4");
    var x24 = document.getElementById("can4");
    var x25 = document.getElementById("total11");
    var xi8 = document.getElementById("img5");

    if (x22.style.display === "none") {
        x22.style.display = "block";
    } else {
        x22.style.display = "none";
    }

    if (x23.style.display === "none") {
        x23.style.display = "block";
    } else {
        x23.style.display = "none";
    }

    if (x24.style.display === "none") {
        x24.style.display = "block";
    } else {
        x24.style.display = "none";
    }

    if (x25.style.display === "none") {
        x25.style.display = "block";
    } else {
        x25.style.display = "none";
    }

    
    if (xi8.style.display === "none") {
        xi8.style.display = "block";
    } else {
        xi8.style.display = "none";
    }
    
}

