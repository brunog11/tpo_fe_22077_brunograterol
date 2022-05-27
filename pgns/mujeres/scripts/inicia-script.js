//la funcion toma la referencia del elemento inicio banner
//que es un div desde arriba hasta abajo
//ya con esa referencia modifica la variable que esta en el archivo css

//el funcionamiento como creo que funciona este escrip es el siguiente
//html>scrip(inicia-script.js + basicScrolll.min.js)>animationScroll.css

//-----------------------------------------------------
let inicio_banner = basicScroll.create({
    elem: document.querySelector('.contmarie'),
    from: 'top-top',
    to: 'bottom-top',
    props: {
        '--opacidad-nav':{
            from: 0,
            to: 1
        },
        '--titular-pos':{
            from: '-10vh',
            to: '30vh'
        }
    }
});

inicio_banner.start();
