// -----------------------------------------------------------------------
// LIBRERIA DE FUNCIONES A UTILIZAR EN EL PROYECTO
// -----------------------------------------------------------------------
// Referencias de elementos del DOM
// -----------------------------------------------------------------------
export const referenciarElementosDom = () => {
  const selectorCategorias = document.getElementById("selectorCategorias");
  const contenedorResultados = document.getElementById("contenedorResultados");
  const listaResultados = document.getElementById("listaResultados");
};

// -----------------------------------------------------------------------
// Mensaje de confirmación de Categoria seleccionada
// -----------------------------------------------------------------------
export const cargarArchivoCategoria = () => {
  let archivoSeleccionado = selectorCategorias.value;
  return archivoSeleccionado;
};

// -----------------------------------------------------------------------
// Extraccion de los valores completos del JSON selecionado
// -----------------------------------------------------------------------
export const extraerDatoCompletoJson = (url, callback) => {
  fetch(url)
    .then((res) => res.json())
    .then((salida) => {
      callback(salida);
    });
};

// -----------------------------------------------------------------------
// Determino el origen de la carga de la pagina
// -----------------------------------------------------------------------
export const origenCargaPagina = () => {
  var entries = performance.getEntriesByType("navigation");
  if (entries[0].type === "back_forward") {
    // La página fue navegada a través del botón de adelante o atrás
    // Refrescar la página
    document.location.reload();
  }
};
