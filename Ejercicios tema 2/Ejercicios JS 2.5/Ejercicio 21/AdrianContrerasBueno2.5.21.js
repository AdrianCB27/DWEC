const tablero = [
  ["📦", "💣", "💣"],
  ["📦", "📦", "📦"],
  ["💣", "📦", "📦"],
];
const tableroMostrado= [
    ["📦", "📦", "📦"],
    ["📦", "📦", "📦"],
    ["📦", "📦", "📦"],
];

let pierde=false,gana=false;
let cant
let coordenadaEnviada;
do{
    console.table(tableroMostrado);
    coordenadaEnviada=prompt("Ingrese una coordenada separada por una coma");
    let coordenadasArray=coordenadaEnviada.split(",") //pasamos las coordenadas a un array para tenerlas organizadas
    let c1=parseInt(coordenadasArray[0]);
    let c2=parseInt(coordenadasArray[1]); //ahora tenemos las coordenadas separadas en dos variables distintas para operar con ellas
    if (tablero[c1][c2]=="💣") { //Si coinciden las coordenadas con una bomba pierdes la partida
        tablero[c1][c2]="💥"
        console.log("Has perdido!")
        pierde=true; //pone la variable bandera a true
    }
    if(tablero[c1][c2]=="📦"){
        console.table("La caja estaba vacía");
        tableroMostrado[c1][c2]="💨";
        tablero[c1][c2]="💨";
    }


}while(!pierde)
    console.table(tablero);
