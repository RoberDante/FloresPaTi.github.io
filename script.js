document.getElementById('showFlowersButton').addEventListener('click', function() {
    const flowers = document.getElementById('flowers');
    if (flowers.classList.contains('hidden')) {
        flowers.classList.remove('hidden');
        setTimeout(() => {
            flowers.classList.add('show');
        }, 10); // Pequeño retraso para permitir la transición
    } else {
        flowers.classList.remove('show');
        setTimeout(() => {
            flowers.classList.add('hidden');
        }, 500); // Espera la duración de la animación antes de ocultarlo
    }
});

document.getElementById('flowers').addEventListener('click', function() {
    alert('Hola Luanita, hoy quiero celebrar nuestra amistad. Que cada flor te recuerde lo especial que eres para mí. ¡Feliz Día de las Flores Amarillas!');
});