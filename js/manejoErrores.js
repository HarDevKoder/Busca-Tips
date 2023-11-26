// // funcion que suma 2 numeros validandolos
// const sumarNumeros = (num1, num2, callback) => {
//   // Funcion asincrona
//   setTimeout(() => {
//     if (typeof num1 !== "number" || typeof num2 !== "number") {
//       callback(new Error("No se admite datos tipo texto"));
//     } else {
//       callback(num1 + num2);
//     }
//   }, 2000);
// };

// // PROGRAMA PRINCIPAL
// sumarNumeros(8, 5, (resultado) => {
//   alert(resultado);
// });

// // funcion que suma 2 numeros validandolos
// const sumarNumeros = (num1, num2) => {
//   return new Promise((response, reject) => {
//     setTimeout(() => {
//       if (typeof num1 !== "number" || typeof num2 !== "number") {
//         reject(new Error("No se admiten datos tipo texto"));
//       } else {
//         response(num1 + num2);
//       }
//     }, 2000);
//   });
// };

// // PROGRAMA PRINCIPAL
// sumarNumeros('h',7)
//   .then((respuesta)=>{
//     alert(respuesta);
//   })
//   .catch((error)=>{
//     alert(error);
//   })

// funcion que suma 2 numeros validandolos
const sumarNumeros = async (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("No se admiten datos tipo texto");
  } else {
    return num1 + num2;
  }
};

// Funcion para mostrar  resultados
const mostrarResultado = async () => {
  try {
    let resultado = await sumarNumeros("6", 7);
    alert(resultado);
  } catch (error) {
    alert(error.message);
  }
};

// PROGRAMA PRINCIPAL
mostrarResultado();
