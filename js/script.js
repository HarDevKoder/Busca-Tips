// Importacion de Funciones;
import {
  referenciarElementosDom,
  cargarArchivoCategoria,
  extraerDatoCompletoJson,
} from "./libreria.js";

// Variables Globales
//Archivo inicial del select
let archivoSeleccionado = "json/git.json";

// ----------------------------------------------------------------------
// PROGRAMA PRINCIPAL
// ----------------------------------------------------------------------
listaResultados.style.display = "none";

// Referencio Elementos del DOM
referenciarElementosDom();

// Selecciono Archivo para extraer Tips
selectorCategorias.addEventListener("change", () => {
  listaResultados.innerHTML = " ";
  listaResultados.style.display = "block";
  archivoSeleccionado = cargarArchivoCategoria();
  if (archivoSeleccionado === "json/Seleccionar.json"){
    document.location.reload();
  }else{
    extraerDatoCompletoJson(archivoSeleccionado, (salida) => {
      salida.data.forEach((item) => {
        let li = document.createElement("li");
        li.innerHTML = item.titulo;
        listaResultados.appendChild(li);
      });
    });
  }
});
