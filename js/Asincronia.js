// Función que muestra Datos en Pantalla
const mostrarDatosPantalla = (datosCompletos) => {
  const spanResultados = document.getElementById('spanResultados');
  let data = `  Nombre: ${datosCompletos.nombre}
  Edad: ${datosCompletos.edad}`;
  spanResultados.innerText = data;
}

// Funcion que muestra varios datos de JSON
const mostrarVariosDatosPantalla = (datosCompletos) => {
  const spanResultados = document.getElementById('spanResultados');
  let elementos = '';
  datosCompletos.data.forEach(dato => {
    elementos += `Nombre: ${dato.nombre}
    Edad:${dato.edad}
    
    `
  });
  spanResultados.innerText = elementos;
}

// Función que extrae datos con XHR
const extraerDatosXhr = (url) => {
  let datosCompletos;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = () => {
    if (xhr.status === 200) {
      datosCompletos = xhr.response;
      mostrarDatosPantalla(datosCompletos);
    } else {
      alert('Problemas en el paraiso');
    }
  };
  xhr.send();
};

// Funcion que extrae datos con FETCH
const extraerDatosFetch = (url) => {
  let datosCompletos;
  fetch(url)
    .then(res => res.json())
    .then((salida) => {
      datosCompletos = salida;
      mostrarDatosPantalla(datosCompletos);
    })
    .catch((error) => alert(error));
}

// Función que extrae datos con ASYNC/AWAIT
const extraerDatosAsyncAwait = async (url) => {
  let respuesta = await fetch(url);
  let datosCompletos = await respuesta.json();
  mostrarDatosPantalla(datosCompletos);
}

// Función que extrae varios datos con ASYNC/AWAIT
const extraerVariosDatosAsyncAwait = async (url) => {
  let respuesta = await fetch(url);
  let datosCompletos = await respuesta.json();
  mostrarVariosDatosPantalla(datosCompletos);
}

// PROGRAMA PRINCIPAL
extraerDatosXhr('json/datos.json');
// extraerDatosFetch('json/datos.json');
// extraerDatosAsyncAwait('json/datos.json');
// extraerVariosDatosAsyncAwait('json/datos2.json');





