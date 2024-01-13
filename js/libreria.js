// -----------------------------------------------------------------------
// LIBRERIA DE FUNCIONES A UTILIZAR EN EL PROYECTO
// -----------------------------------------------------------------------
// Comprobación e Compatibilidad con ervice Worker (PWA)
// -----------------------------------------------------------------------
export const verificarServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./sw.js")
      .then((reg) => console.log("Registro de SW exitoso", reg))
      .catch((err) => console.warn("Error al tratar de registrar el sw", err));
  }
};

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
// Genera elemento de lista y muestra modal con el tip
// -----------------------------------------------------------------------
const generarElementoLista = (item) => {
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
};

// -----------------------------------------------------------------------
// Busqueda general de todos los tips (Select por default)
// -----------------------------------------------------------------------
export const busquedaTotal = (salida) => {
  listaResultados.innerHTML = "";
  salida.data.forEach((item) => {
    generarElementoLista(item);
  });
};

// -----------------------------------------------------------------------
// Busqueda filtrada (texto del input)
// -----------------------------------------------------------------------
const busquedaFiltrada = (salida) => {
  listaResultados.innerHTML = "";
  let textoInput = inputBusqueda.value.toLowerCase();
  salida.data.forEach((item) => {
    let li = document.createElement("li");
    if (item.titulo.toLowerCase().includes(textoInput)) {
      generarElementoLista(item);
    }
  });
};

// -----------------------------------------------------------------------
// Muestra los items de la categoria seleccionada
// -----------------------------------------------------------------------
export const desplegarTips = (archivoSeleccionado) => {
  if (archivoSeleccionado === "json/seleccionar.json") {
    listaResultados.style.display = "none";
    contenedorLogoTech.src = "imagenes/categorias/programacion.svg";
  } else {
    extraerDatoCompletoJson(archivoSeleccionado, (salida) => {
      listaResultados.style.display = "block";
      contenedorLogoTech.src = salida.link;
      busquedaTotal(salida);
      inputBusqueda.addEventListener("input", () => {
        busquedaFiltrada(salida);
      });
    });
  }
};
