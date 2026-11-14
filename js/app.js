const cambiarTexto = () => {
  console.log("Desde la funcion cambiar texto");
  const parrafo = document.getElementById("parrafo"); //devuelve un objeto
  // const parrafo = document.getElementsByTagName('p') //devuelve un array de nodos
  // const parrafo = document.getElementsByClassName('fs-5') //devuelve un array de nodos
  // console.log(parrafo)
  // const parrafo = document.querySelector('.fs-5') //devuelve un objeto, el primero que cumple con el selector enviado
  // const parrafo = document.querySelectorAll('p') //devuelve un array de nodos
  console.log(parrafo);
  parrafo.textContent = "Párrafo nuevo de prueba";
  // parrafo.innerHTML = 'Párrafo nuevo de <b class="text-danger">prueba</b> '
  //cambiar el estilo de un elemento
  parrafo.classList.add("text-primary");
  // parrafo.className = 'fs-5 mb-0 text-primary'
};

const ocultarMensaje = () => {
  console.log("desde la funcion ocultar mensaje, titulo:");
  const div = document.querySelectorAll("div");
  console.log(div[23]);

  if (btnOcultar.textContent.includes("Ocultar")) {
    div[23].classList.add("d-none");
    //estilazar el boton
    btnOcultar.innerHTML = '<i class="bi bi-eye me-1"></i> Mostrar';
    btnOcultar.classList.replace("btn-danger", "btn-success");
  } else {
    //mostrar el div oculto
    div[23].classList.remove("d-none");
    btnOcultar.innerHTML = '<i class="bi bi-eye-slash me-1"></i> Ocultar';
    btnOcultar.classList.replace("btn-success", "btn-danger");
  }
};

const btnOcultar = document.querySelector("#btnOcultar");
const btnEliminar = document.querySelector("#btnEliminar");

//agregar un manejador de eventos
//ejemplo de funcion con parametros
// btnOcultar.addEventListener('click', ()=> ocultarMensaje('funcion con parametros'))
//ejemplo de funcion sin parametros
btnOcultar.addEventListener("click", ocultarMensaje);
btnEliminar.addEventListener("click", () => {
  const divEliminar = document.querySelector(".bg-danger-subtle");
  //codigo de sweetalert
  Swal.fire({
    title: "¿Estas seguro de eliminar?",
    text: "No se puede revertir posteriormente este paso",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Eliminar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    console.log(result);
    if (result.isConfirmed) {
      //aqui agregar la logica que quiero que suceda si el usuario acepto eliminar
      //eliminar
      divEliminar.remove();
      //deshabilitar el boton
      btnEliminar.classList.add("disabled");

      Swal.fire({
        title: "Mensaje eliminado!",
        icon: "success",
      });
    }
  });
});
