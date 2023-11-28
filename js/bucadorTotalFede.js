// Referencio Objetos el DOM
let selectCategorias = document.getElementById("selectCategorias");
const inputBusqueda = document.getElementById("inputBusqueda");
const btnBuscar = document.getElementById("btnBuscar");
const listaResultados = document.getElementById("listaResultados");

// Variables Globales
let archivo = "json/peliculas.json"; //Ruta de Archivo de datos

// Función que muestra mensaje de selección de categorias
const mensajeSeleccionCategoria = (event) => {
  const valorSeleccionado = event.target.selectedOptions[0].text;
  alert(`Bienvenido a la sección de ${valorSeleccionado}`);
  archivo = selectCategorias.value;
};

// Funcion que valida datos ingresados al input
const validarCaracteresInput = (event) => {
  const regex = /^[a-z\s]$/i;
  if (event.key === "Backspace" || regex.test(event.key)) {
  } else {
    event.preventDefault();
  }
};

// Función que realiza la búsqueda
const buscar = () => {
  listaResultados.innerHTML = "";
  fetch(archivo)
    .then((res) => res.json())
    .then((salida) => {
      for (let item of salida.data) {
        if (item.titulo.startsWith(inputBusqueda.value.toUpperCase())) {
          let p = document.createElement("p");
          // p.id = item.titulo;
          p.innerHTML = item.sinopsis;
          p.style.display = "none";

          let li = document.createElement("li");
          li.innerHTML = item.titulo;
          li.style.listStyle = "none";

          li.addEventListener("mouseover", () => {
            p.style.display = "block";
          });

          li.addEventListener("mouseleave", () => {
            p.style.display = "none";
          });

          li.appendChild(p);
          listaResultados.appendChild(li);
        }
      }
    })
    .catch((error) => alert(error));
};

// PROGRAMA PRINCIPAL

// Escuchadores de Eventos
selectCategorias.addEventListener("change", mensajeSeleccionCategoria);
inputBusqueda.addEventListener("keydown", validarCaracteresInput);
btnBuscar.addEventListener("click", buscar);
