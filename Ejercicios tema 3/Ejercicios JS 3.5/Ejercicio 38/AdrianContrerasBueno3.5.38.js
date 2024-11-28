console.log("🥇 Primero"); //1

setTimeout(() => {
  console.log("🕐 Timeout 1");//5
  Promise.resolve().then(() => console.log("🤔 Promesa dentro de timeout"));//6
}, 0);

Promise.resolve().then(() => {
  console.log("✨ Promesa 1"); //3
  setTimeout(() => console.log("⏰ Timeout dentro de promesa"), 0);//8
});

Promise.resolve().then(() => console.log("💫 Promesa 2"));//4
setTimeout(() => console.log("🕑 Timeout 2"), 0);//7

console.log("🥈 Segundo"); //2
let miPromesa= Promise.resolve().then(()=>console.log("Se ha resuelto mi promesa"));
async function miFuncion(promesa) {
    const respuesta=await promesa;
    console.log(respuesta);
}
miFuncion(miPromesa);
