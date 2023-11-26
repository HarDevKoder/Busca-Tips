// -------------------------------------------------------------------------------
// LIBRERIA DE FUNCIONES A UTILIZAR EN EL PROYECTO
// -------------------------------------------------------------------------------
// Validacion Entrada datos (Permitir: A-Z, backspace, espacio)
// -------------------------------------------------------------------------------
export const validarDatoInput = (event) =>{
  const txtDatoBuscado = document.getElementById('txtDatoBuscado');
  let regex = /^[a-z\s]$/i;
  if(event.key === 'Backspace' || regex.test(event.key)){    
  }else{
    event.preventDefault();
  }
}

// -------------------------------------------------------------------------------
// 
// -------------------------------------------------------------------------------

