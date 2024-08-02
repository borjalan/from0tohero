function randomcolor() {
 let hexadecimal = "0123456789ABCDEF".split("")
 let color = "#"

 for(var i = 0; i< 6; i++){
    color += hexadecimal[(Date.now() + i) % 15]
 }

 return color;
}

function myFunction() {
    const contenedor = document.getElementById("contenedor")
    contenedor.style.background = randomcolor();
}

