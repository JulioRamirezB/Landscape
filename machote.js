const fila = document.querySelector('.contenedor-iconos');
const pantallas = document.querySelectorAll('.iconos');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');


// -----------------Event listener para la flechaDerecha------------------

flechaDerecha.addEventListener('click', ()=>{
    fila.scrollLeft += fila.offsetWidth;
    const indicadorActivo = document.querySelector('.dots .activo')
    if(indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo')
    }
    
})



// -----------------Event listener para la flechaIzquierda------------------

flechaIzquierda.addEventListener('click',()=>{
    fila.scrollLeft -= fila.offsetWidth;
    const indicadorActivo = document.querySelector('.dots .activo')
    if(indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo')
    }
})



// ---------------------Paginación----------------------
const numeroPaginas = pantallas.length/1;
    for(let i = 0; i < numeroPaginas; i++){
        const indicador = document.createElement('button');

        if(i === 0){
            indicador.classList.add('activo');
        }


        document.querySelector('.dots').appendChild(indicador);
        indicador.addEventListener('click', (e)=>{
            fila.scrollLeft = i * fila.offsetWidth;

            document.querySelector('.dots .activo').classList.remove('activo');
            e.target.classList.add('activo')

        })
    }

// -----------------------Carpeta-----------------

var abrirPopup = document.getElementById('abrir-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    cerrarPopup = document.getElementById('icono-cerrar');

abrirPopup.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
})  

cerrarPopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
})





    