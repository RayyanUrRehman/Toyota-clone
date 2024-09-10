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