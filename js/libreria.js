// -----------------------------------------------------------------------
// LIBRERIA DE FUNCIONES A UTILIZAR EN EL PROYECTO
// -----------------------------------------------------------------------
// Referencias de elementos del DOM
// -----------------------------------------------------------------------
export const referenciarElementosDom = () => {
  return {
    selectorCategorias: document.querySelector("#selectorCategorias"),
    contenedorResultados: document.querySelector("#contenedorResultados"),
    listaResultados: document.querySelector("#listaResultados"),
    contenedorLogoTech: document.querySelector("#contenedorLogoTech"),
    inputBusqueda: document.querySelector("#inputBusqueda"),
  };
};

// -----------------------------------------------------------------------
// Selecciona el archivo JSON de acuerdo a la opcion elegida en el select
// -----------------------------------------------------------------------
export const cargarArchivoCategoria = () => {
  const archivoSeleccionado = selectorCategorias.value;
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
  const entries = performance.getEntriesByType("navigation");
  if (entries[0]?.type === "back_forward") {
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
  let overlay = document.createElement("div");
  overlay.classList.add("overlay");

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

// -----------------------------------------------------------------------
// Extracción de items de JSON mostrandolos como elementos de lista (li)
// Se muestra modal con el contenido del tip
// -----------------------------------------------------------------------
export const mostrarListadoTips = (salida) => {
  listaResultados.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos
  salida.data.forEach((item) => {
    if (item.titulo.startsWith(inputBusqueda.value.toUpperCase())) {
      let li = document.createElement("li");
      li.classList.add("liTip");
      li.textContent = item.titulo;
      li.addEventListener("click", () => {
        let elemento = "";
        item.pasos.forEach((paso) => {
          elemento += paso + "\n";
        });
        customAlert(elemento);
      });
      listaResultados.appendChild(li);
    }
  });
};

// -----------------------------------------------------------------------
// Realiza acciones de acuerdo al JSON seleccionado
// -----------------------------------------------------------------------
export const desplegarTips = (archivoSeleccionado) => {
  if (archivoSeleccionado === "json/Seleccionar.json") {
    listaResultados.style.display = "none";
    contenedorLogoTech.src = "imagenes/programacion.svg";
  } else {
    extraerDatoCompletoJson(archivoSeleccionado, (salida) => {
      listaResultados.style.display = "block";
      contenedorLogoTech.src = salida.link;

      inputBusqueda.addEventListener("input", () => {
        mostrarListadoTips(salida);
      });

      mostrarListadoTips(salida);
    });
  }
};
