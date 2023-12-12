export const mostrarListadoTips = (salida) => {
  listaResultados.innerHTML = "";
  salida.data.forEach((item) => {
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
  });
};
