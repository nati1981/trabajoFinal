let vuno = document.querySelector("#cSectionUno_cambio");
let vdos = document.querySelector("#inpNombre");
let vtres = document.querySelector("#inpBoton");

function myFunction(){
    
    vuno.innerHTML=inpNombre.value;
    vuno.style.color = "blue";

}
vdos.addEventListener("change", myFunction);


function myFunctionDos(){
    window.alert(inpNombre.value + ", gracias por ingresar tus datos. nos mantenemos en coctacto!");
}

vtres.addEventListener("click", myFunctionDos);