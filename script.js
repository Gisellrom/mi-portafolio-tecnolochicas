/**
 * El DOM  = Document Object Model modelo de objeto del documento
 * 
 * Objeto en Javascript, por lo tanto va a tener propiedades y comportamientos asociados.
 * 
 * Es en forma más sencilla una variable en JS que va a traer una abstracción de mi documento de HTML
 */

var tituloProyecto = document.getElementById('proyecto');

var typeW = new Typewriter(tituloProyecto, {
    loop: true
});


typeW.typeString('¡Hola!, bienvenid@ a')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Mi portafolio de proyectos')
    .pauseFor(1500)
    .deleteChars(26)
    .start();


var nombre = document.getElementById('nombre');

var eventoNombre = new Typewriter(nombre, {
        loop: true
});
    
    
eventoNombre.typeString('Soy Gisell Noemi Soriano Romero')
    .pauseFor(1000)
    .deleteAll()
    .start();