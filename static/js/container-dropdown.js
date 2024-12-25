let dj = document.getElementsByClassName('container-pointer')[0];
let react = document.getElementsByClassName('container-pointer')[1];
let Athlead = document.getElementById('second-container');
let learn_react = document.getElementById('third-container');

learn_react.addEventListener('click',function () {

});

learn_react.addEventListener('mouseover', function () {
    react.style.transform = 'scale(2.3)';
    react.style.borderRadius = '50%';
});

learn_react.addEventListener('mouseout', function () {
    react.style.transform = 'scale(1)';
});

Athlead.addEventListener('mouseover', function () {
    dj.style.transform = 'scale(2.3) rotate(-90deg) translateY(-10%)';
    dj.style.borderRadius = '50%';
});

Athlead.addEventListener('mouseout', function () {
    dj.style.transform = 'scale(1)';
});
