
document.addEventListener("DOMContentLoaded", ()=>{
    if (getNumeroVisitasActual()==undefined) {
        document.cookie=`numeroVisitas=1;expires=604800`;
        console.log(document.cookie.split("=")[1]); //así cogemos el valor de la cookie 
    }else{
        let actual=getNumeroVisitasActual()
        document.cookie=`numeroVisitas=${++actual};expires=604800`;
        console.log(document.cookie.split("=")[1]);
    }

});
function getNumeroVisitasActual(){
    return document.cookie.split("=")[1];
}
document.getElementById("totalVisits").innerHTML=getNumeroVisitasActual()==undefined ? "1":getNumeroVisitasActual();
function resetVisits() {
    document.cookie=`numeroVisitas=0`;
    location.reload()
}



