function cargar(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            gestionarRespuesta(this.responseText);
        } else if (this.readyState == 4) {
            gestionarError();
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function gestionarError() {
    location.href = "error.html";
}

function gestionarRespuesta(respuesta) {

    var obj = JSON.parse(respuesta);
    var entrantes = obj.Entrantes;
    var pizzas = obj.Pizzas;
    var postres = obj.Postres;

    var misentrantes = [];
    var mispizzas = [];
    var mispostres = [];

    pintar(entrantes, misentrantes);
    // pintar(pizzas, mispizzas)
    // pintar(postres, mispostres)

    escribir(misentrantes)
    // escribir(mispizzas)
    // escribir(mispostres)
    // console.log(Entrantes);
    // console.log(Pizzas);  
    // console.log(Postres);

}

function pintar(menu, lista) {
    menu.forEach(carta => {
        var newcarta = new Dish(carta.Plato.Nombre, carta.Plato.Descripcion, carta.Plato.Precio, carta.Plato.Imagen);
        lista.push(newcarta);
    });
}

function escribir(categoria) {

    categoria.forEach(micarta => {
        console.log(micarta.Nombre);
        console.log(micarta.Descripcion);
        console.log(micarta.Precio);
        console.log(micarta.Imagen);


        var nombre=  document.createElement("h3");   
        var descripcion = document.createElement("h4");
        var precio = document.createElement("h5");
        var imagen = document.createElement("img");
        imagen.setAttribute("src", micarta.Imagen);
        var nuevoInput = document.createElement("input");
        nuevoInput.setAttribute("type","button");
        nuevoInput.setAttribute("value","comprar");
        nuevoInput.setAttribute("onclick","comprar('"+micarta.Nombre+"',"+micarta.Precio+")");

        var textoNombre = document.createTextNode(micarta.Nombre);
        var textoDescripcion = document.createTextNode(micarta.Descripcion);
        var textoPrecio = document.createTextNode(micarta.Precio+"€");

        nombre.appendChild(textoNombre);
        descripcion.appendChild(textoDescripcion);
        precio.appendChild(textoPrecio);
      

        document.getElementById("contenedor").appendChild(nombre);
        document.getElementById("contenedor").appendChild(descripcion);
        document.getElementById("contenedor").appendChild(precio);
        document.getElementById("contenedor").appendChild(imagen); 
        document.getElementById("contenedor").appendChild(nuevoInput);


    }

    )
};
