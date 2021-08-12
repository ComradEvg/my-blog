$(document).ready(function () {

   $(function(){
      $('.preloader, .loader').addClass('complete');
      setTimeout(function () {$('.preloader').remove()},1000)
   });

   document.querySelectorAll('a.menu__link').forEach(link => {
      link.addEventListener('click', function (e){
         e.preventDefault()
         const href = this.getAttribute('href').substring(1)
         const scrollTarget = document.getElementById(href)

         const topOffset = 0
         const elementPosition = scrollTarget.getBoundingClientRect().top
         const offsetPosition = elementPosition - topOffset

         window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
         })
      })
   });

   $('.burger').on('click', function (event) {
      $('.burger,.header,.menu,.header__row').toggleClass('active');
      $('body').toggleClass('lock');
   });

   $('.card').on('click', function (event) {
      $('.card,.card__img-box,.content-card').toggleClass('active-card');
      $('.card__marker').remove();
   });

   

   $('.social__link').hover(function (event) {
      $(this).find('.box-bw').toggleClass('disactive-icon');
      $(this).find(':first').toggleClass('active-icon');
   });

});