let dj = document.getElementsByClassName('container-pointer')[0];
let Athlead = document.getElementById('first-container');


Athlead.addEventListener('mouseover', function () {
    dj.style.transform = 'scale(2.3) rotate(-90deg) translateY(-10%)';
    dj.style.borderRadius = '50%';
});

Athlead.addEventListener('mouseout', function () {
    dj.style.transform = 'scale(1)';
});
