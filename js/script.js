document.addEventListener('DOMContentLoaded', function(){
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        spaceBetween: 32,
        simulateTouch: true,
        breakpoints: {
          360:{
            slidesPerView: 1,
          },
          400:{
            slidesPerView: 2,
          },
          700: {
            slidesPerView: 3,
          },
          1100: {
            slidesPerView: 4,
          },
          1400:{
            slidesPerView: 5
          }
        }
      });
    

      const goto = document.querySelectorAll('.header-link[data-goto]')
      const gotoMobile = document.querySelectorAll('.mobile-link[data-goto');
      if(goto.length>0){
        goto.forEach(goto => {
            goto.addEventListener('click', onMenuClick)
        });
        function onMenuClick(e){
            const menuLink = e.target;
            if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = Math.max(gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight, 0);
                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: 'smooth'
                })
                e.preventDefault();
            }
        }
      }
      if(gotoMobile.length>0){
        gotoMobile.forEach(gotoMobile => {
          gotoMobile.addEventListener('click', onMenuMobileClick)
        });
        function onMenuMobileClick(e){
            const menuLink = e.target;
            burger.classList.remove('active')
            mobileMenu.classList.remove("active")
            mobileBurger.classList.remove("active")
            if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;;
                window.scrollTo({
                    top: gotoBlockValue,
                    behavior: 'smooth'
                })
                e.preventDefault();
            }
        }
      }


      

      const burger = document.querySelector('.burger-button');
      const mobileBurger = document.querySelector('.burger-button-menu');
      const mobileMenu = document.querySelector('.mobile-menu');
      if(burger){
        burger.addEventListener('click', function(){
          if(burger.classList.contains('active')){
            burger.classList.remove("active")
            mobileMenu.classList.remove("active")
            mobileBurger.classList.remove("active")
          }
          else{
            burger.classList.add("active")
            mobileMenu.classList.add("active")
            mobileBurger.classList.add("active")
          }
        })
      }
      if(mobileBurger){
        mobileBurger.addEventListener("click", function(){
          if(mobileBurger.classList.contains('active')){
            burger.classList.remove("active")
            mobileMenu.classList.remove("active")
            mobileBurger.classList.remove("active")
          }
          else{
            burger.classList.add("active")
            mobileMenu.classList.add("active")
            mobileBurger.classList.add("active")
          }
        })
      }

})