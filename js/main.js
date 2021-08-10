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
      $('.burger,.header,.menu,.header__row').toggleClass('active');
      $('body').toggleClass('lock');
   });

   $('.card').click(function (event) {
      $('.card,.card__img-box,.content-card').toggleClass('active-card');
   });

});