// car slider start 
    document.getElementById('btn1').addEventListener('click', function () {
        showGallery('gallery1');
    });
    document.getElementById('btn2').addEventListener('click', function () {
        showGallery('gallery2');
    });
    document.getElementById('btn3').addEventListener('click', function () {
        showGallery('gallery3');
    });
    document.getElementById('btn4').addEventListener('click', function () {
        showGallery('gallery4');
    });

    function showGallery(galleryId) {
        var galleries = document.querySelectorAll('.gallery');
        galleries.forEach(function (gallery) {
            gallery.style.display = 'none';
        });

        document.getElementById(galleryId).style.display = 'block';
    }

    showGallery('gallery1');

// car slider end



// news slider start 

    let currentSlide = 0;
    const totalSlides = 27; 
    const intervalTime = 3000; 
 
    function getSlidesToShow() {
        return window.innerWidth >= 768 ? 4 : 1;
    }

    function getSlideWidth() {
        const carousel = document.getElementById('carousel-images');
        const slidesToShow = getSlidesToShow();
        return carousel.clientWidth / slidesToShow; 
    }

    function moveCarousel(direction) {
        const carousel = document.getElementById('carousel-images');
        const slideWidth = getSlideWidth(); 
        const slidesToShow = getSlidesToShow();

        currentSlide = (currentSlide + direction + totalSlides) % totalSlides; 
        const offset = -(currentSlide * slideWidth); 
        carousel.style.transform = `translateX(${offset}px)`; 
        carousel.style.transition = 'transform 0.5s ease'; 
    }

    setInterval(() => {
        moveCarousel(1); 
    }, intervalTime);

// news slider end 