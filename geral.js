    var carousel = document.getElementById('carousel');
    console.log(carousel)
    var slides = 3;
    var speed = 7000; // 5 segundos

    function carouselHide(num) {
        indicators[num].setAttribute('data-state', '');
        slides[num].setAttribute('data-state', '');
        slides[num].style.opacity=0;
    }

    function carouselShow(num) {
        indicators[num].checked = true;
        indicators[num].setAttribute('data-state', 'active');
        slides[num].setAttribute('data-state', 'active');
        slides[num].style.opacity=1;
    }

    function setSlide(slide) {
        return function() {
        // Reset todos os slides
        for (let i = 0; i < indicators.length; i++) {
            indicators[i].setAttribute('data-state', '');
            slides[i].setAttribute('data-state', '');
            carouselHide(i);
        }
        //define os slides como activos
        indicators[slide].setAttribute('data-state', 'active');
        slides[slide].setAttribute('data-state', 'active');
        carouselShow(slide);
        //Pára o auto-switcher
        clearInterval(switcher);
        };
    }

    function switchSlide() {
        let nextSlide = 0;
            // Reset todos os slides
            for (let i = 0; i < indicators.length; i++) {
                //No caso de o slide estar ativo e não ser igual ao anterior, então incrementar nextSlide
                if ((indicators[i].getAttribute('data-state') == 'active') && (i !== (indicators.length-1))) {
                nextSlide = i + 1;
                }
            carouselHide(i);
            }
            // Set o proximo slide como ativo e mostra o proximo slide
            carouselShow(nextSlide);
    }

    if (carousel) {
        var slides = carousel.querySelectorAll('.slide');
        var indicators = carousel.querySelectorAll('.indicator');
        var switcher = setInterval(function() {
            switchSlide();
        }, speed);

    for (let i = 0; i < indicators.length; i++) {
        indicators[i].addEventListener("click", setSlide(i));
    }
}
