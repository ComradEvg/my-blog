$(document).ready(function () {

   function ibg() {
      $.each($('.ibg'), function (index, val) {
         if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
         }
      });
   }
   ibg();
   let vh = window.innerHeight*0.01;
   document.documentElement.style.setProperty('--vh', `${vh}px`)

   $('.burger').click(function (event) {
      $('.burger,.header,.menu').toggleClass('active');
      $('body').toggleClass('lock');
   });

   $('.card').click(function (event) {
      $('.card,.card__img,.content-card').toggleClass('active-card');
   });

});