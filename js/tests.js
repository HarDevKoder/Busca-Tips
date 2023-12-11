export const desplegarTips = (archivoSeleccionado) => {
  if (archivoSeleccionado === "json/Seleccionar.json") {
    listaResultados.style.display = "none";
    contenedorLogoTech.src = "imagenes/programacion.svg";
  } else {
    extraerDatoCompletoJson(archivoSeleccionado, (salida) => {
      listaResultados.style.display = "block";
      contenedorLogoTech.src = salida.link;

      inputBusqueda.addEventListener("input", () => {
        let filtrado = salida.data.filter((item) =>
          item.titulo.includes(inputBusqueda.value.toUpperCase().trim())
        );
        mostrarListadoTips({ ...salida, data: filtrado });
      });

      mostrarListadoTips(salida);
    });
  }
};
