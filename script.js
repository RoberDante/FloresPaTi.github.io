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
    alert('Hola luanita, mi querida amiguita.

Hoy quiero celebrar nuestra amistad, tan valiosa y especial para mí. Quiero que sepas que te aprecio mucho. Yo se que no te pude dar un ramo real y perdóname por eso 🙏  más adelante te daré un ramo lleno de muchas flores, así bien grande. Bueno no tanto xq te puede aplastar pero lo importante es q te de un ramo para que cada vez que lo veas me recuerdes :).

Bueno me siento muy afortunado de tenerte como mi amiguita, eres una gran chica. Aunque estemos lejos me encanta poder compartir momentos contigo :]

¡Feliz Día de las Flores Amarillas, mi querida Luanita! Te quiero mucho, amiguita mía ;)

Edit: La página recién cargo :[ así q te lo envío hoy ;) perdóm.');
});
