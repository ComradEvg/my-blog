$(document).ready(function () {

   function ibg() {
      $.each($('.ibg'), function (index, val) {
         if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
         }
      });
   }
   ibg();

   $('.burger').click(function (event) {
      $('.burger,.menu,.link__lang').toggleClass('active');
      $('body').toggleClass('lock');
   });

   $('.slider__row').slick({
      dots: false,
      autoplay: false,
      autoplaySpeed: 1000,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      nextArrow: '<div class="arrow-right-item"><svg class="arrow-right"><use xlink: href = "#arrow-right"></use></svg></div>',
      prevArrow: '<div class="arrow-left-item"><svg class="arrow-left"><use xlink: href ="#arrow-left"></use></svg></div>',
      appendArrows: $('.container-arrows'),
   });

   var ffff = $(window).width();

   if (ffff <= 767) {
      $('.servises__row').slick({
         dots: true,
         autoplay: false,
         autoplaySpeed: 1000,
         infinite: true,
         speed: 500,
         fade: true,
         cssEase: 'linear',
         arrows: false,
      });
   } else {
   }

   $('.card').hover(function (event){
      $(this).toggleClass('active-card');
   })

   $('.flip').on('click', function (event) {
      $(this).toggleClass('active-flip');
      $('.finger').addClass('finger-none');
   })
});