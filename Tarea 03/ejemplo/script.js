function getRandomColor() {
    // Generamos un color aleatorio en hexadecimal
    var letters = "0123456789ABCDEF";
    var color = "#";
    // Generamos un color aleatorio de 6 digitos
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    // Retornamos el color generado
    return color;
}

function cambiarColor() {
    var div = document.getElementById("centrado");
    // Aplicamos un estilo css al div background con un color aleatorio
    div.style.backgroundColor = getRandomColor();
    console.log("Color cambiado a: " + div.style.backgroundColor);
}
