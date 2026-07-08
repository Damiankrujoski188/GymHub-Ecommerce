export const actualizarContador = (carrito) =>{
    const contadorCarrito = document.getElementById("contador-carrito");
    if(contadorCarrito){
        contadorCarrito.textContent = carrito.length;
    }
};

export const mostrarMensaje = (mensaje) => {
    alert(mensaje);
};
