$("#btnColor").click(function () {
  $("#targetDiv").css({
    "background-color": "blue",
  });
});
$("#btnText").click(function () {
  $("#targetDiv").text("Texto en el div con Jquery");
});

$("#btnToggle").click(function () {
    $("#targetDiv").toggleClass('desaparece'); //con el toggleClass le hacemos que se active o desactive la clase cada vez que pulsamos el botón
  });
