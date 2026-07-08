import { obtenerCarrito } from "./storage.js";
import { eliminarProducto, vaciarCarrito } from "./funcionesCarrito.js";
import { actualizarContador } from "./ui.js";

const renderizarCarrito = () => {
    const carrito = obtenerCarrito();
    actualizarContador(carrito);

    const contenedor = document.getElementById("contenedor-carrito");
    const divAcciones = document.getElementById("acciones-carrito");

    //Sirve para resetear el carrito (por si se elimino algun producto)
    contenedor.innerHTML = ""; 
    divAcciones.innerHTML = "";

    if(!carrito.length){
        const mensaje = document.createElement("p");
        mensaje.classList.add("mensaje-carrito-vacio");
        mensaje.textContent = "Tu carrito esta vacio 😮";
        
        contenedor.appendChild(mensaje);
        return;
    }

    carrito.forEach((producto, index) => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta-carrito");
                
        const img = document.createElement("img");
        img.src = `../${producto.img}`;
        img.alt = producto.nombre;

        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;

        const descripcion = document.createElement("p");
        descripcion.textContent = producto.descripcion;

        const precio = document.createElement("p");
        precio.classList.add("precio")
        precio.textContent = `$${producto.precio}`;

        const btnEliminar = document.createElement("button");
        // btnEliminar.classList.add("btn");
        btnEliminar.classList.add("btn-eliminar-carrito");
        btnEliminar.textContent = "Eliminar producto";

        btnEliminar.addEventListener("click", () => {
            eliminarProducto(index);
            renderizarCarrito();

        });

        tarjeta.appendChild(img);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(descripcion);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(btnEliminar);

        contenedor.appendChild(tarjeta);
    });

    const btnVaciar = document.createElement("button");
    btnVaciar.classList.add("btn-vaciar-carrito");
    btnVaciar.textContent = "Vaciar Carrito";

    btnVaciar.addEventListener("click", () =>{
        vaciarCarrito("¡Carrito Vaciado Correctamente ✅!");
        renderizarCarrito();
    });

    const btnFinalizarCompra = document.createElement("button");
    btnFinalizarCompra.classList.add("btn-finalizarCompra-carrito");
    btnFinalizarCompra.textContent = "Finalizar Compra";

    btnFinalizarCompra.addEventListener("click", () =>{
        vaciarCarrito("¡Compra finalizada con éxito ✅! ");
        renderizarCarrito();
    })


    divAcciones.appendChild(btnVaciar);
    divAcciones.appendChild(btnFinalizarCompra);




};

document.addEventListener("DOMContentLoaded", () => {
    renderizarCarrito();
});