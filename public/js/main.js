particlesJS("particles-js", {"particles":{"number":{"value":100,"density":{"enable":false,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"star","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg","width":100,"height":100}},"opacity":{"value":0.744,"random":false,"anim":{"enable":false,"speed":10,"opacity_min":0.1,"sync":false}},"size":{"value":4,"random":true,"anim":{"enable":true,"speed":29.169401298038377,"size_min":0,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1.6000000000000003,"direction":"left","random":false,"straight":true,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":200,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {  } requestAnimationFrame(update); }; requestAnimationFrame(update);


// Знаходимо елемент, який потрібно видалити
var unwantedElement = document.querySelector('div[style*="cursor: pointer; opacity: 0.9; position: absolute; left: 0px; top: 0px;"]');

// Перевіряємо, чи елемент був знайдений
if (unwantedElement) {
    // Видаляємо елемент
    unwantedElement.remove();
} else {
    console.error('Елемент не знайдено.');
}