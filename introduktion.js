function scrollAppear(){
    var visualEffect = document.querySelector('.visual-effect');
    var visualPosition = visualEffect.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 2;
    
    if(visualPosition < screenPosition){
        visualEffect.classList.add('visual-effect-appear');
    }
}

window.addEventListener('scroll', scrollAppear);