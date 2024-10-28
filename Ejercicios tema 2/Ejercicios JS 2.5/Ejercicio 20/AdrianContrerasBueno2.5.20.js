let toDoList = [
  "Hacer los deberes",
  "Ir al gym",
  "Llevar a la perra al veterinario",
  "Dormir la siesta",
  "Dejar el lol",
];
console.log(toDoList);
let index= toDoList.indexOf("Ir al gym");
console.log(toDoList[index]);
toDoList.splice(index,1);
console.log(toDoList);
