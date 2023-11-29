
// Importacion de Funciones;
import {
  referenciarElementosDom,
  cargarArchivoCategoria,
  extraerDatoCompletoJson,
  origenCargaPagina
} from "./libreria.js";

// Origen de la carga de la pagina (inicial o retroceso)
origenCargaPagina();

// Variables Globales
//Archivo inicial del select
let archivoSeleccionado = "json/Seleccionar.json";

// ----------------------------------------------------------------------
// PROGRAMA PRINCIPAL
// ----------------------------------------------------------------------

// Referencio Elementos del DOM
referenciarElementosDom();

// Selecciono Archivo para extraer Tips
selectorCategorias.addEventListener("change", () => {
  listaResultados.innerText = " ";
  archivoSeleccionado = cargarArchivoCategoria();
  if (archivoSeleccionado === "json/Seleccionar.json") {
    listaResultados.style.display = "none";
  } else {
    extraerDatoCompletoJson(archivoSeleccionado, (salida) => {
      listaResultados.style.display = "block";
      salida.data.forEach((item) => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.textContent = item.titulo;
        a.href = item.link;
        a.style.textDecoration = 'none';
        a.style.color = 'Black';
        a.style.fontWeight = 'Black';
        li.appendChild(a);
        listaResultados.appendChild(li);
      });
    });
  }
});
