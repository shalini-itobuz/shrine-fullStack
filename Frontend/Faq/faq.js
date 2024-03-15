document.addEventListener("DOMContentLoaded", function (event) {
    const carouselContainer = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    const images = [
        "http://localhost:8000/images/faq/prayer/pray.png",
        "http://localhost:8000/images/faq/prayer/pray.png",
        "http://localhost:8000/images/faq/prayer/pray.png",
        
    ];

    let currentIndex = 0;

    function updateCarousel() {
        carouselContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
    }

    function goToNext() {
        currentIndex = Math.min(currentIndex + 1, images.length - 1);
        updateCarousel();
    }

    function goToPrev() {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateCarousel();
    }

    prevBtn.addEventListener('click', goToPrev);
    nextBtn.addEventListener('click', goToNext);

    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = image;
        carouselContainer.appendChild(img);
    });

    updateCarousel();
});