// Importacion de Funciones;
import {
  referenciarElementosDom,
  cargarArchivoCategoria,
  validarDatoInput,
  extraerDatoCompletoJson,
} from "./libreria.js";

// Variables Globales
//Archivo inicial del select
let archivoSeleccionado = "json/git.json";

// ----------------------------------------------------------------------
// PROGRAMA PRINCIPAL
listaResultados.style.display= 'none';
// Referencio Elementos del DOM
referenciarElementosDom();

// Selecciono Archivo para extraer Tips
selectorCategorias.addEventListener("change", () => {
  archivoSeleccionado = cargarArchivoCategoria();
});

// Evito ingreso de numeros y caracteres especiales al input
txtBusqueda.addEventListener("keydown", validarDatoInput);

btnBuscar.addEventListener("click", () => {
  listaResultados.innerHTML = " ";
  if (txtBusqueda.value.trim() !== "") {
    extraerDatoCompletoJson(archivoSeleccionado, (salida) => {
      salida.data.forEach((item) => {
        if (item.nombre.startsWith(txtBusqueda.value.toLowerCase())) {
          let li = document.createElement("li");
          li.innerHTML = item.nombre;
          listaResultados.appendChild(li);
        }
      });
      txtBusqueda.value = "";
    });
    listaResultados.style.display = "block";
  }else{
    listaResultados.style.display = "none";
  }
});
