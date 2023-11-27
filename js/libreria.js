// -----------------------------------------------------------------------
// LIBRERIA DE FUNCIONES A UTILIZAR EN EL PROYECTO
// -----------------------------------------------------------------------
// Referencias de elementos del DOM
// -----------------------------------------------------------------------
export const referenciarElementosDom = () => {
  const selectorCategorias = document.getElementById("selectorCategorias");

  const txtBusqueda = document.getElementById("txtBusqueda");

  const btnBuscar = document.getElementById("btnBuscar");

  const contenedorResultados = document.getElementById("contenedorResultados");

  const listaResultados = document.getElementById('listaResultados');
};

// -----------------------------------------------------------------------
// Mensaje de confirmación de Categoria seleccionada
// -----------------------------------------------------------------------
export const cargarArchivoCategoria = () => {
    alert(
      `Los Tips de ${event.target.selectedOptions[0].text}\nhan sido Cargados!`
    );
    let archivoSeleccionado = selectorCategorias.value;
    return archivoSeleccionado;
};

// -----------------------------------------------------------------------
// Validacion Entrada datos (Permitir: A-Z, backspace, espacio)
// -----------------------------------------------------------------------
export const validarDatoInput = (event) => {
  let regex = /^[a-z\s]$/i;
  if (event.key === "Backspace" || regex.test(event.key)) {
  } else {
    event.preventDefault();
  }
};

// -----------------------------------------------------------------------
// Extraccion de los valores completos del JSON selecionado
// -----------------------------------------------------------------------
export const extraerDatoCompletoJson = (url, callback) =>{
  fetch(url)
    .then(res => res.json())
    .then((salida)=>{
      callback(salida);
    })
}