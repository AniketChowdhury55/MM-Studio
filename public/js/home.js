const scroll = new LocomotiveScroll({
    el: document.querySelector('.body'),
    smooth: true
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navItems = document.getElementById('nav-items1');

    hamburger.addEventListener('click', () => {
        if (navItems.style.display === 'flex') {
            navItems.style.display = 'none';
        } else {
            navItems.style.display = 'flex';
        }
    });
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
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
