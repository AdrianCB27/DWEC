let ubicaciones = [];
const apiKey = '413afbb2e4cef397bea6cb6d714af83c';
const endPoint = "https://api.openweathermap.org/data/2.5/weather";

formulario = document.getElementById("locationForm");

formulario.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const ciudad = document.getElementById("cityInput").value;
    const respuesta = await hacerPeticion(ciudad);
    const temperatura = (respuesta.main.temp - 273).toFixed();
    const maxTemp = (respuesta.main.temp_max - 273).toFixed();
    const minTemp = (respuesta.main.temp_min - 273).toFixed();
    const estadoTiempo = respuesta.weather[0].main;
    const descripcion = respuesta.weather[0].description;

    mostrarTiempo(ciudad, temperatura, maxTemp, minTemp, estadoTiempo, descripcion);
    guardarUbicacion(ciudad);
    cargar()
});

async function hacerPeticion(ciudad) {
    const respuestaJson = await axios.get(`${endPoint}?q=${ciudad}&appid=${apiKey}`);
    return respuestaJson.data;
}

function mostrarTiempo(ciudad, temp, maxTemp, minTemp, estadoTiempo, descripcion) {
    const divResultado = document.getElementById("weatherResult");
    divResultado.innerHTML = `El tiempo en ${ciudad}<br> Temperatura: ${temp}ºC Max: ${maxTemp}ºC Min: ${minTemp}ºC<br>Cielo: ${estadoTiempo} ${descripcion}`;
}

function cargar() {
    const guardadas = localStorage.getItem("guardadas");
    if (guardadas) {
        ubicaciones = guardadas.split(",");
    } else {
        ubicaciones = [];
    }

    const ulGuardados = document.getElementById("locationList");
    ulGuardados.innerHTML = "";

    ubicaciones.forEach((ubicacion) => {
        const li = document.createElement("li");
        li.className="list-group-item";
        li.innerHTML = ubicacion;
        li.addEventListener("click",async ()=>{
            hacerPeticion(ubicacion);
            const respuesta = await hacerPeticion(ubicacion);
            const temperatura = (respuesta.main.temp - 273).toFixed();
            const maxTemp = (respuesta.main.temp_max - 273).toFixed();
            const minTemp = (respuesta.main.temp_min - 273).toFixed();
            const estadoTiempo = respuesta.weather[0].main;
            const descripcion = respuesta.weather[0].description;
        
            mostrarTiempo(ubicacion, temperatura, maxTemp, minTemp, estadoTiempo, descripcion);

        })
        ulGuardados.appendChild(li);
    });
}

function guardarUbicacion(ciudad) {
    if (!ubicaciones.includes(ciudad)) {
        ubicaciones.unshift(ciudad);
        localStorage.setItem("guardadas", ubicaciones.join(","));
    }
}

document.addEventListener("DOMContentLoaded", () => {
    cargar();
});

