$(document).ready(function () {
    $("#ver-mas").click(function () {
        $(".hidden").fadeIn(); // Muestra las imágenes con un efecto
        $(this).hide(); // Oculta el botón después de hacer clic
        $("#ver-menos").show(); //Muestra el botón ver menos
    });
});

$(document).ready(function () {
    $("#ver-menos").click(function () {
        $(".hidden").fadeOut(); // Oculta las imágenes con un efecto
        $(this).hide(); // Oculta el botón después de hacer clic
        $("#ver-mas").show(); // Muestra el botón ver mas
    });
});