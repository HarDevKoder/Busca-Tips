// Importacion de Funciones;
import {
  referenciarElementosDom,
  cargarArchivoCategoria,
  validarDatoInput
} from "./libreria.js";

// Variables Globales
//Archivo inicial del select
let archivoSeleccionado = "json/git.json"; 


// PROGRAMA PRINCIPAL
// Referencio Elementos del DOM
referenciarElementosDom();

// Selecciono Archivo para extraer Tips
selectorCategorias.addEventListener("change", ()=>{
    archivoSeleccionado = cargarArchivoCategoria();
});

// Evito ingreso de numeros y caracteres especiales al input
txtBusqueda.addEventListener('keydown', validarDatoInput);

btnBuscar.addEventListener('click',()=>{
  alert(archivoSeleccionado);
})
