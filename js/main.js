"use strick"

$(function () {
   $('.preloader, .loader').addClass('complete');
   setTimeout(function () { $('.preloader').remove() }, 1000)
});

document.addEventListener('DOMContentLoaded', function () {

   document.querySelectorAll('a.menu__link').forEach(link => {
      link.addEventListener('click', function (e) {
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

   // window.addEventListener('scroll', () => {
   //    let scrollDistance = window.scrollY - document.querySelector('.header').clientHeight;
   //    document.querySelectorAll('.anchor').forEach((el, i) => {
   //       if (el.offsetTop <= scrollDistance) {
   //          document.querySelectorAll('.menu__list a').forEach((el) => {
   //             if (el.classList.contains('active-nav')) {
   //                el.classList.remove('active-nav');
   //             }
   //          });
   //          document.querySelectorAll('.menu__list li')[i].querySelector('a').classList.add('active-nav');
   //       }
   //    });
   // });

   const form = document.getElementById("form");
   const loaderform = document.getElementById('loader-form');
   form.addEventListener('submit', formSend);


   async function formSend(e) {
      e.preventDefault();

      let error = formValidate(form);

      let formData = new FormData(form);

      if (error === 0) {
         loaderform.classList.add('sending');
         let response = await fetch('./sendmail.php', {
            method: 'POST',
            body: formData
         });
         if (response.ok) {
            let result = await response.json();
            alert(result.message);
            form.reset();
            loaderform.classList.remove('sending');
         }
         else {
            alert("????????????");
            loaderform.classList.remove('sending');
         }
      }
      else {
         alert('?????????????????? ???????????????????????? ????????');
      }
   }

   function formValidate(form) {
      let error = 0;
      let formReq = document.querySelectorAll('.req');
      for (let index = 0; index < formReq.length; index++) {
         const input = formReq[index];
         formRemoveError(input);

         if (input.classList.contains('email')) {
            if (emailTest(input)) {
               formAddError(input);
               error++;
            }
         } else {
            if (input.value === '') {
               formAddError(input);
               error++;
            }
         }
      }
      return error;
   }

   function formAddError(input) {
      input.parentElement.classList.add('_error');
      input.classList.add('_error');
   }
   function formRemoveError(input) {
      input.parentElement.classList.remove('_error');
      input.classList.remove('_error');
   }
   // Function test Email
   function emailTest(input) {
      return !/^\w+([\.-]?\w+)*@\w([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
   }

   $('.burger,.header__bg').on('click', function (event) {
      $('.burger,.header,.menu,.header__row').toggleClass('active');
      $('body').toggleClass('lock');

   });

   $('.card,#about-me-nav').on('click', function (event) {
      $('.card,.card__img-box,.content-card').toggleClass('active-card');
      $('.card__marker').remove();
   });

// POP-UP
   const popupLinks = document.querySelector('.contacts__btn')

   popupLinks.addEventListener("click", function(e){
      e.preventDefault();
      const popup = document.querySelector('.form-inner');
      const popupitem = document.querySelector('.form')
      popupSwitch(popup, popupitem);
   });

   function popupSwitch(popup, popupitem){
      if(popup){
         popup.classList.add('open');
         popupitem.classList.add('open');
         popup.addEventListener("click", function(e){
            if(!e.target.closest('.form__body')){
               popup.classList.remove('open');
               popupitem.classList.remove('open');
            }
         });
      }
   }

// 

   $('.social__link').hover(function (event) {
      $(this).find('.box-bw').toggleClass('disactive-icon');
      $(this).find(':first').toggleClass('active-icon');
   });
});