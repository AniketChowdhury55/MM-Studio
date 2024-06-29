const scroll = new LocomotiveScroll({
    el: document.querySelector('.body'),
    smooth: true
});



document.addEventListener('DOMContentLoaded', (event) => {
    const videos = document.querySelectorAll('#video');

    videos.forEach(video => {
        video.addEventListener('mouseenter', () => {
            video.play();
        });

        video.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0; // Optional: reset the video to the beginning
        });
    });
});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  document.getElementById('get-started').addEventListener('click', function() {
    document.getElementById('page-3').scrollIntoView({ behavior: 'smooth' });
});