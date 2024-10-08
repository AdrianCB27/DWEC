let animal={
    hablar: function(){
        console.log("Holaaa");
    }
}
let perro=Object.create(animal);
perro.hablar=function(){
    console.log("Guau guau")
}
console.log(perro.hablar());
console.log(animal.hablar());
