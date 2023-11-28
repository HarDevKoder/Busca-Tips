// -----------------------------------------------------------------------
// LIBRERIA DE FUNCIONES A UTILIZAR EN EL PROYECTO
// -----------------------------------------------------------------------
// Referencias de elementos del DOM
// -----------------------------------------------------------------------
export const referenciarElementosDom = () => {
  const selectorCategorias = document.getElementById("selectorCategorias");
  const contenedorResultados = document.getElementById("contenedorResultados");
  const listaResultados = document.getElementById('listaResultados');
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
export const extraerDatoCompletoJson = (url, callback) =>{
  fetch(url)
    .then(res => res.json())
    .then((salida)=>{
      callback(salida);
    })
}

// -----------------------------------------------------------------------
// 
// -----------------------------------------------------------------------


