export const validarCaracteres = (texto) => {
  if (texto.length < 2 || texto.length > 150) {
    return false;
  } else {
    return true;
  }
};

export const validarSimbolos = (texto)=>{
  const regExp = /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]+$/;
  if (!regExp.test(texto)) {
    return false
  }else{
    return true
  }
}

export const prueba = ()=>{
    console.log('funcion de prueba desde validaciones.js')
}

export const saludo = 'hola desde validaciones'