// Importacion de Funciones;
import {
  referenciarElementosDom,
  cargarArchivoCategoria,
  extraerDatoCompletoJson,
  origenCargaPagina,
  customAlert,
} from "./libreria.js";

// Origen de la carga de la pagina (inicial o retroceso)
origenCargaPagina();

// Variables Globales
//Archivo y logo iniciales del select
let archivoSeleccionado = "json/Seleccionar.json";
let linkIconoTech;

// ----------------------------------------------------------------------
// PROGRAMA PRINCIPAL
// ----------------------------------------------------------------------

// Referencio Elementos del DOM
referenciarElementosDom();

// Cargo el logo para la opción por defecto (seleccionar archivo)
contenedorLogoTech.src = "imagenes/programacion.svg";

// Selecciono Archivo para extraer Tips
selectorCategorias.addEventListener("change", () => {
  listaResultados.innerText = " ";
  archivoSeleccionado = cargarArchivoCategoria();
  if (archivoSeleccionado === "json/Seleccionar.json") {
    listaResultados.style.display = "none";
    contenedorLogoTech.src = "imagenes/programacion.svg";
  } else {
    extraerDatoCompletoJson(archivoSeleccionado, (salida) => {
      listaResultados.style.display = "block";
      contenedorLogoTech.src = salida.link;
      salida.data.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = item.titulo;
        li.style.cursor = "pointer";
        li.addEventListener("click", () => {
          let elemento = "";
          item.pasos.forEach((paso) => {
            elemento += paso + "\n";
          });
          customAlert(elemento);
        });
        listaResultados.appendChild(li);
      });
    });
  }
});
