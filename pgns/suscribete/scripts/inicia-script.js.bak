//la funcion toma la referencia del elemento inicio banner
//que es un div desde arriba hasta abajo
//ya con esa referencia modifica la variable que esta en el archivo css

//el funcionamiento como creo que funciona este escrip es el siguiente
//html>scrip(inicia-script.js + basicScrolll.min.js)>animationScroll.css

//-----------------------------------------------------
let inicio_banner = basicScroll.create({
    elem: document.querySelector('.inicio_banner'),
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
//-----------------------------------------------------
let imagen1 = basicScroll.create({
    //aca selecciona el div contenedor para la referecnia
    elem: document.querySelector('.intermedio-img1'),
    //toma referencia desde la parte arriba al fondo del element
    //osea from (desde): top(pantalla) top(elemento)
    //     to(hasta): botton(pantalla) middle(elemento)
    from: 'top-top',
    to: 'bottom-middle',
    //aca creo la instacia de estilo que permite el movimiento y actualiza la variable
    props: {
        '--mov-img1':{
            from: '0px',
            to: '15px'
        }
    }
});
//-----------------------------------------------------
let imagen2 = basicScroll.create({
    //aca selecciona el div contenedor para la referecnia
    elem: document.querySelector('.intermedio-img2'),
    //toma referencia desde la parte arriba al fondo del elemento
    from: 'top-top',
    to: 'bottom-middle',
    //aca creo la instacia de estilo que permite el movimiento y actualiza la variable
    props: {
        '--mov-img2':{
            from: '15px',
            to: '5px'
        }
    }
});
//-----------------------------------------------------
let imagen3 = basicScroll.create({
    //aca selecciona el div contenedor para la referecnia
    elem: document.querySelector('.intermedio-img3'),
    //toma referencia desde la parte arriba al fondo del elemento
    from: 'top-top',
    to: 'bottom-middle',
    //aca creo la instacia de estilo que permite el movimiento y actualiza la variable
    props: {
        '--mov-img3':{
            from: '100%',
            to: '120p%'
        }
    }
});
//-----------------------------------------------------
let imagen4 = basicScroll.create({
    //aca selecciona el div contenedor para la referecnia
    elem: document.querySelector('.intermedio-img4'),
    //toma referencia desde la parte arriba al fondo del elemento
    from: 'top-top',
    to: 'bottom-middle',
    //aca creo la instacia de estilo que permite el movimiento y actualiza la variable
    props: {
        '--mov-img4':{
            from: '15px',
            to: '-30px'
        }
    }
});
//-----------------------------------------------------
//aca ejecuto las funciones 
inicio_banner.start();
imagen1.start();
imagen2.start();
imagen3.start();
imagen4.start();
