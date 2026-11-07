const cambiarTexto = ()=>{
    console.log('Desde la funcion cambiar texto')
    const parrafo = document.getElementById('parrafo') //devuelve un objeto
    // const parrafo = document.getElementsByTagName('p') //devuelve un array de nodos
    // const parrafo = document.getElementsByClassName('fs-5') //devuelve un array de nodos
    // console.log(parrafo)
    // const parrafo = document.querySelector('.fs-5') //devuelve un objeto, el primero que cumple con el selector enviado
    // const parrafo = document.querySelectorAll('p') //devuelve un array de nodos
    console.log(parrafo)
    parrafo.textContent = 'Párrafo nuevo de prueba'
    // parrafo.innerHTML = 'Párrafo nuevo de <b class="text-danger">prueba</b> '
    //cambiar el estilo de un elemento
    parrafo.classList.add('text-primary')
    // parrafo.className = 'fs-5 mb-0 text-primary'
}