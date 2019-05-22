//javascript til text fade-in

function scrollAppear() {
    var visualEffect = document.querySelector('.visual-effect');
    var visualPosition = visualEffect.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.2;

    if (visualPosition < screenPosition) {
        visualEffect.classList.add('visual-effect-appear');
    }
}

window.addEventListener('scroll', scrollAppear);




//javascript til accordion åbner

document.addEventListener('click', function (event) {
    if (!event.target.classList.contains('accordion-toggle')) return;


    var content = document.querySelector(event.target.hash);
    if (!content) return;


    event.preventDefault();

    if (content.classList.contains('active')) {
        content.classList.remove('active');
        return;
    }

    var accordions = document.querySelectorAll('.accordion');

    for (var i = 0; i < accordions.length; i++) {
        accordions[i].classList.remove('active');
    }
    content.classList.add('active');

}, false);