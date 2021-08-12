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

         const topOffset = document.querySelector('.header').clientHeight
         const elementPosition = scrollTarget.getBoundingClientRect().top
         const offsetPosition = elementPosition - topOffset

         window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
         })
      })
   });

   window.addEventListener('scroll', () =>{
      let scrollDistance = window.scrollY - document.querySelector('.header').clientHeight;
      console.log(scrollDistance);
      document.querySelectorAll('.anchor').forEach((el, i) => {
         if(el.offsetTop<=scrollDistance){
            console.log(el.offsetTop);
            document.querySelectorAll('.menu__list a').forEach((el)=>{
               if(el.classList.contains('active-nav')){
                  el.classList.remove('active-nav');
               }
            });
            document.querySelectorAll('.menu__list li')[i].querySelector('a').classList.add('active-nav');
         }
      });
   });

   $('.burger').on('click', function (event) {
      $('.burger,.header,.menu,.header__row').toggleClass('active');
      $('body').toggleClass('lock');
   });

   $('.card,#about-me-nav').on('click', function (event) {
      $('.card,.card__img-box,.content-card').toggleClass('active-card');
      $('.card__marker').remove();
   });

   

   $('.social__link').hover(function (event) {
      $(this).find('.box-bw').toggleClass('disactive-icon');
      $(this).find(':first').toggleClass('active-icon');
   });

});