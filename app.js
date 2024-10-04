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

    // let currentSlide = 0;
    // const totalSlides = 27; // Number of images in the slider
    // const slideWidth = 100 / 4; // Since we are showing 4 images at a time
    // const intervalTime = 3000; // Time interval in milliseconds (e.g., 3000ms = 3 seconds)

    // function moveCarousel(direction) {
    //     const carousel = document.getElementById('carousel-images');
    //     currentSlide = (currentSlide + direction + totalSlides) % totalSlides; // Update the current slide index
    //     const offset = -(currentSlide * slideWidth); // Calculate the percentage offset
    //     carousel.style.transform = `translateX(${offset}%)`; // Move the carousel
    // }

    // // Automatically move the carousel every intervalTime
    // setInterval(() => {
    //     moveCarousel(1); // Move the carousel forward by 1 slide every 3 seconds
    // }, intervalTime);

    //     let currentSlide = 0;
    // const totalSlides = 27; // Number of images in the slider
    // const slidesToShow = 4; // Number of images shown at a time
    // const slideWidth = 100 / slidesToShow; // Percentage width of each slide
    // const intervalTime = 3000; // Time interval in milliseconds (e.g., 3000ms = 3 seconds)

    // function moveCarousel(direction) {
    //     const carousel = document.getElementById('carousel-images');
        
    //     // Move to next slide
    //     currentSlide += direction;
        
    //     // Clone first and last slides to make the transition smooth
    //     if (currentSlide >= totalSlides) {
    //         currentSlide = 0;
    //         carousel.style.transition = 'none'; // Disable transition for the jump
    //     } else if (currentSlide < 0) {
    //         currentSlide = totalSlides - 1;
    //         carousel.style.transition = 'none'; // Disable transition for the jump
    //     }
        
    //     const offset = -(currentSlide * slideWidth); // Calculate the percentage offset
    //     carousel.style.transform = `translateX(${offset}%)`; // Move the carousel
        
    //     // Re-enable the transition after resetting position for a smooth effect
    //     setTimeout(() => {
    //         carousel.style.transition = 'transform 0.5s ease'; // Add transition back for smooth sliding
    //     }, 0);
    // }

    // // Automatically move the carousel every intervalTime
    // setInterval(() => {
    //     moveCarousel(1); // Move the carousel forward by 1 slide every 3 seconds
    // }, intervalTime);



    let currentSlide = 0;
    const totalSlides = 27; //27 Number of images in the slider
    const intervalTime = 3000; // Time interval in milliseconds (e.g., 3000ms = 3 seconds)

    // Function to determine how many slides to show based on screen size
    function getSlidesToShow() {
        return window.innerWidth >= 768 ? 4 : 1; // 4 slides for large screens, 1 slide for mobile (768px breakpoint)
    }

    // Function to get the width of a single slide based on the carousel's actual width
    function getSlideWidth() {
        const carousel = document.getElementById('carousel-images');
        const slidesToShow = getSlidesToShow();
        return carousel.clientWidth / slidesToShow; // Get the width of one slide in pixels
    }

    function moveCarousel(direction) {
        const carousel = document.getElementById('carousel-images');
        const slideWidth = getSlideWidth(); // Get the width of one slide in pixels
        const slidesToShow = getSlidesToShow();

        currentSlide = (currentSlide + direction + totalSlides) % totalSlides; // Update the current slide index
        const offset = -(currentSlide * slideWidth); // Calculate the pixel offset
        carousel.style.transform = `translateX(${offset}px)`; // Move the carousel using pixel values
        carousel.style.transition = 'transform 0.5s ease'; // Smooth transition
    }

    // Automatically move the carousel every intervalTime
    setInterval(() => {
        moveCarousel(1); // Move the carousel forward by 1 slide every 3 seconds
    }, intervalTime);



    


// news slider end 