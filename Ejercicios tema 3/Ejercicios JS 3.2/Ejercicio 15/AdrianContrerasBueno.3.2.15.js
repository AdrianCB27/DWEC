const parrafo=document.getElementById("mouseInfo");
parrafo.addEventListener("mousemove",function(){
    let x=event.clientX;
    let y=event.clientY;
    parrafo.innerHTML="Coordenadas : x - "+x+" y - "+y;
})