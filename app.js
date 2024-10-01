// car slider start 

    // JavaScript to handle button clicks
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
        // Hide all galleries
        var galleries = document.querySelectorAll('.gallery');
        galleries.forEach(function (gallery) {
            gallery.style.display = 'none';
        });

        // Show the selected gallery
        document.getElementById(galleryId).style.display = 'block';
    }

    // Optionally, show the first gallery by default
    showGallery('gallery1');

// car slider end


//news slider start

    let currentSlide = 0;
        const totalSlides = 7; // Number of images in the slider
        const slideWidth = 100 / 4; // Since we are showing 4 images at a time
    
        function moveCarousel(direction) {
            const carousel = document.getElementById('carousel-images');
            currentSlide = (currentSlide + direction + totalSlides) % totalSlides; // Update the current slide index
            const offset = -(currentSlide * slideWidth); // Calculate the percentage offset
            carousel.style.transform = `translateX(${offset}%)`; // Move the carousel
        }

// news slider end 