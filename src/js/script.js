// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         dots: false,
//         speed: 900,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                 }
//             }
//         ]
//     });
//   });

// const slider = tns({
//     container: '.carousel__inner',
//     items: 1,
//     slideBy: 'page',
//     autoplay: false,
//     controls: false,
//     nav: false
//   });
//   document.querySelector('.prev').addEventListener('click', function() {
//     slider.goTo('prev');
//   });
//   document.querySelector('.next').addEventListener('click', function() {
//     slider.goTo('next');
//   });

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 1,
      nav: true,
      loop: true,
      navSpeed: 700,
      navText: [
        '<img src="img/arrow-left.png">',
        '<img src="img/arrow-right.png"></img>'
      ],
      center: true
    });
  });

  // const owl = $('.owl-carousel');
  // owl.owlCarousel();
  // // Go to the next item
  // $('.nextBtn').click(function() {
  //     owl.trigger('next.owl.carousel');
  // })
  // // Go to the previous item
  // $('.prevBtn').click(function() {
  //     // With optional speed parameter
  //     // Parameters has to be in square bracket '[]'
  //     owl.trigger('prev.owl.carousel');
  // });