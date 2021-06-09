let conteiner= document.querySelector("#conteiner");
let btnCrearDiv=document.querySelector("#btnCrearDiv");


btnCrearDiv.addEventListener('click',()=>{
    crearDiv();
    //console.log('entro');
})

const crearDiv=()=>{
    let divNuevo=document.createElement('div');
    //divNuevo.style.backgroundColor='#d00000';
    divNuevo.classList.add('cuadro');
    conteiner.appendChild(divNuevo);
}