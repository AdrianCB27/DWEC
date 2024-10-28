
function obtenerNacionalidad() {
    const nombre = prompt("Introduce un nombre:");


    fetch(`https://api.nationalize.io/?name=${nombre}`)
        .then(response => response.json())
        .then(data => {
            if (data.country && data.country.length > 0) {
                let maxProb = data.country[0];
                for (let pais of data.country) {
                    if (pais.probability > maxProb.probability) {
                        maxProb = pais;
                    }
                }

                alert(`El país con mayor probabilidad para el nombre ${nombre} es ${maxProb.country_id} con una probabilidad de ${maxProb.probability * 100}%.`);
            } else {
                alert(`No se encontraron resultados para el nombre ${nombre}.`);
            }
        })
        .catch(error => {
            alert(`Error al obtener los datos: ${error}`);
        });
}
obtenerNacionalidad()