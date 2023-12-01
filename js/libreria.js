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

// -----------------------------------------------------------------------
// Ventana Modal para Mostrar Tips
// -----------------------------------------------------------------------
export const customAlert = (tip) => {
  // creo el overlay y la clase para darle estilos por aparte
  let overlay = document.createElement('div');
  overlay.classList.add('overlay');

  // Ventana modal
  let modal = document.createElement("div");
  modal.classList.add("modal");

  // Parrafo para escribir el Tip
  let text = document.createElement("p");
  text.innerText = tip;
  
  // Boton de cierre de ventana Modal
  let btnCerrar = document.createElement("button");
  btnCerrar.classList.add("btnCerrar");
  btnCerrar.textContent = "X";
  btnCerrar.addEventListener("click", () => {
    modal.remove();
    overlay.remove();

  });

  // Agrego elementos a ventana modal
  modal.append(text, btnCerrar);

  // Agrego ventana modal y overlay al body de la página
  document.body.append(overlay, modal);
};
