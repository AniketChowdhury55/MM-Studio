const scroll = new LocomotiveScroll({
    el: document.querySelector('.body'),
    smooth: true
});


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
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
    document.getElementById('top').scrollIntoView({ behavior: 'smooth' });
});