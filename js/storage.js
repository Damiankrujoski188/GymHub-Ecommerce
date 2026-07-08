const KEY = "carrito";

export const guardarCarrito = (carrito, productos) => {
    //Convertimos a JSON antes de guardar con stringify
    localStorage.setItem(KEY, JSON.stringify(carrito));
};

export const obtenerCarrito = () => {
    //Convertimos a JS para obtener los datos con parse
    return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const vaciarCarritoStorage = () => {
    localStorage.removeItem(KEY);

};