// const btnSubmenu= document.querySelectorAll(".submenu-btn");

// for (let i=0; i<btnSubmenu.length; i++){

//     btnSubmenu[i].addEventListener("click", function(){
//         const sub=this.nextElementSibling;
//         const altura=sub.scrollHeight;
//         const flechas=document.getElementsByClassName("flechas");
        
//         if(sub.classList.contains("despliegue")){
//             sub.classList.remove("despliegue");
//             sub.removeAttribute("style");
//         }else{
//             sub.classList.add("despliegue");
//             sub.style.height = altura + "px";
//         }

//         if(flechas[i].classList.contains("rotar-arriba")){
//             flechas[i].classList.remove("rotar-arriba");
//             flechas[i].classList.add("rotar-abajo");
//         }else{
//             flechas[i].classList.remove("rotar-abajo");
//             flechas[i].classList.add("rotar-arriba");
//         }

//     });
// }

const fecha=document.getElementById("fechas");
const btnform=document.getElementById("btn-form");

btnform.addEventListener("click", function(){
    if(fecha.classList.contains("desple")){
        fecha.classList.add("ocultar");
        fecha.classList.remove("container-fechas");
        fecha.classList.remove("desple");
    }else{
        fecha.classList.add("desple");
        fecha.classList.remove("ocultar");
        fecha.classList.add("container-fechas");
    }
});

