let jap_fan = document.getElementById('jap_fan');
let maxClicks = 5;
let clicks = 0;
let timeout;

function timer_exec() {
    clicks++;


    clearTimeout(timeout);
    timeout = setTimeout(() => {
        clicks = 0
    }, 1000);

    if (clicks >= maxClicks) {
        console.log('damn');
        jap_fan.style.pointerEvents = 'none';
    }
}

if (jap_fan) {
    jap_fan.addEventListener('click', timer_exec);
} else {
    console.warn('Element with id "jap_fan" not found!');
}
