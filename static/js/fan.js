let jap_fan = document.getElementById('jap_fan');
let maxClicks = 5;
let clicks = 0;

function addClicks() {
    clicks++;
    if (clicks === maxClicks) {
        console.log('Max clicks reached');
        clicks = 0;
    }
}

if (jap_fan) {
    jap_fan.addEventListener('click', addClicks);
} else {
    console.warn('Element with id "jap_fan" not found!');
}

