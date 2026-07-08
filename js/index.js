import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

//Funcion encargada de renderizar las tarjetas de productos
const renderizarProductos = () => {
    const contenedor = document.getElementById("contenedor-tarjetas");

    fetch("../data/productos.json")
    .then(response => response.json())
    .then(data => 
        data.forEach((producto) => {
            const tarjeta = document.createElement("article");
            tarjeta.classList.add("card");
                
            const img = document.createElement("img");
            img.src = `./${producto.img}`;
            img.alt = producto.nombre;

            const titulo = document.createElement("h3");
            titulo.textContent = producto.nombre;

            const descripcion = document.createElement("p");
            descripcion.textContent = producto.descripcion;

            const precio = document.createElement("p");
            precio.classList.add("precio")
            precio.textContent = `$${producto.precio}`;

            const btnAgregar = document.createElement("button");
            btnAgregar.classList.add("btnAdd");
            btnAgregar.textContent = "Agregar al carrito";

            btnAgregar.addEventListener("click", () => {
                agregarAlCarrito(producto);
            });


            tarjeta.appendChild(img);
            tarjeta.appendChild(titulo);
            tarjeta.appendChild(descripcion);
            tarjeta.appendChild(precio);
            tarjeta.appendChild(btnAgregar);
            contenedor.appendChild(tarjeta);

            }) 
        )
        .catch(error => console.log(error));
};

document.addEventListener("DOMContentLoaded", () =>{
    const carrito = obtenerCarrito();
    actualizarContador(carrito);
    
    renderizarProductos();
});


