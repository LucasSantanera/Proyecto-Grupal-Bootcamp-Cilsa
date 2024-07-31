// importaciones 

import { getAllProducts } from "../service/products.js"

// instancias de elementos
const contenedor_pizzas = document.getElementById("contenedor-pizzas")
const contenedor_ensaladas = document.getElementById("contenedor-ensaladas")
const contenedor_sandwich = document.getElementById("contenedor-sandwich")
const contenedor_bebidas = document.getElementById("contenedor-bebidas")


const fillProducts = async ()=>{
    const products = await getAllProducts()

    products.array.forEach(products => {
        const category = product.category
        
        console.log(products)

    });
}

fillProducts ()




let container;
if (category === "men's clothing"){
    container = contenedor_pizzas
} else if (category === "jewelery"){
    container = contenedor_ensaladas
} else if (category === "electronics"){
    container = contenedor_sandwich
} else if (category === "women's clothing"){
    container = contenedor_bebidas
}

// crear elemento en la categoría

container.innerHTML += `<div>${product.tittle}</div>`