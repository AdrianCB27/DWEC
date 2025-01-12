$('#searchInput').keyup(function () {
    let valorInput = $('#searchInput').val().trim();
    
    const productos = $('.product'); //esto coge todos los productos que contienen la clase product 
    productos.each(function() { //así lo recorremos
        if (!$(this).text().includes(valorInput)) { //si no contiene el texto que escribimos en el input lo oculta
            $(this).fadeOut()
        }else{
            $(this).fadeIn()
        }
    });
});
$('#categoryFilter').change(function(){
    let valorSeleccionado = $('#categoryFilter').val();
    const productos = $('.product');  
    productos.each(function() { 
        if (!$(this).attr('data-category').includes(valorSeleccionado)) { //usamos la funcion attr de jquery para acceder al atributo data-category
            $(this).fadeOut()
        }else{
            $(this).fadeIn()
        }
    });
})


