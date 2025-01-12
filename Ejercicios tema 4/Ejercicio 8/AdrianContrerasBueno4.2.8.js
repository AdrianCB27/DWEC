$("#addTask").click(function () {
    const textoTarea = $("#newTask").val().trim();
    if (textoTarea !== "") {
      const lista = $("#taskList");
      const nuevoElemento = $(`<li style="display:none;">${textoTarea} <button class="marcar">Marcar</button> <button class="eliminar">Eliminar</button></li>`);
      lista.append(nuevoElemento);
      nuevoElemento.fadeIn();
    } else {
      alert("El valor de la tarea no puede estar vacío!!!");
    }
  });
  
  $(document).on('click', '.marcar', function () {
    $(this).parent().toggleClass('completed'); //hay que poner parent para que se aplique al elemento superior (el li), si no se aplicaría al boton la clase
  });
  
  $(document).on('click', '.eliminar', function () {
    $(this).parent().fadeOut(function () {
      $(this).remove();
    });
  });
  
