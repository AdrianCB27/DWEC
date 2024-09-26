let numeroEnviado= prompt("Introduzca el número del que quiere ver la tabla");

for (let i = 1; i <=10; i++) {
    document.write("<p>"+numeroEnviado+" x "+ i + " = "+(i*numeroEnviado)+"</p>");
}