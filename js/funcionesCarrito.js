import { guardarCarrito, obtenerCarrito, vaciarCarritoStorage } from "./storage.js";
import {actualizarContador, mostrarMensaje} from "./ui.js"

export const agregarAlCarrito = (producto) => {
    //Utilizamos la funcion que obtiene el carrito al localStorage
    const carrito = obtenerCarrito();
    carrito.push(producto);

    //Utilizamos la funcion que guarda en el carrito en el localStorage
    guardarCarrito(carrito);

    //Actualizamos el numero de carrito y mostramos un msj
    actualizarContador(carrito);
    mostrarMensaje("¡Producto agregado correctamente ✅!");

};

export const eliminarProducto = (indice) => {
    const carrito = obtenerCarrito();
    //Elimina un elemento del array
    carrito.splice(indice, 1);

    guardarCarrito(carrito);
    actualizarContador(carrito);
    mostrarMensaje("¡Producto eliminado correctamente ✅!");
};

export const vaciarCarrito = (mensaje) => {
    vaciarCarritoStorage();
    actualizarContador([]);
    mostrarMensaje(mensaje);
};

