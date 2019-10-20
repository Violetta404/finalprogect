// slider carousel

$('.slider-carousel').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

// slider about team

$('.slider-team').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1160,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 930,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 625,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// mobile slider services

$('.slider-services').slick();

// mobile slider portfolio

$('.slider-portfolio').slick();

// menu-btn

$('.menu-btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu-btn-active');
});

// mobile-menu

$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $('.menu-mobile').toggleClass('menu-active');
})


// // galleria

$(document).ready(function(){
  $(".portfolioNavigator").click(function(){

      if ($(this).hasClass('photography')) {
       $('.work-galleria > .web').hide();
       $('.work-galleria > .logo').hide();
       $('.work-galleria > .photography').show();
   }
   else if($(this).hasClass('web')) {
      $('.work-galleria > .logo').hide();
       $('.work-galleria > .photography').hide();
       $('.work-galleria > .web').show();
   }
   else if($(this).hasClass('logo')) {
      $('.work-galleria > .web').hide();
       $('.work-galleria > .photography').hide();
       $('.work-galleria > .logo').show();
    }
    else if($(this).hasClass('all')) {
      $('.work-galleria > .web').show();
       $('.work-galleria > .photography').show();
       $('.work-galleria > .logo').show();
    }
  }); 
});

// Sticky header

$(function() {
    
  const header = document.getElementById("myHeader");
  const sticky = header.offsetTop;
  
  function updateHeaderClass() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };

  $(window).scroll(function () {
      updateHeaderClass();
  });

});

// Header Links
$(function() {
  const $header = $('#myHeader');
  const $sections = $('section.main-section');
  const $menuButtons = $('#menu .nav-menu');

  $menuButtons.on('click', function(event) {
      const $button = $(this);
      const anchor = $button.attr('href');
      const $scrollToElement = $(anchor);

      if (!$scrollToElement.length) {
          return;
      }
      
      event.preventDefault();

      if ($button.hasClass('active')) {
          return;
      }

      $('html, body').animate({scrollTop: $scrollToElement.offset().top}, 500);
  });

  $(window).scroll(function () {
      const scrollDistance = $(window).scrollTop();
      const headerHeight = $header.height();

      $sections.each(function (i) {
          const $section = $(this);
          const elementTop = $section.offset().top;
          const elementBottom = elementTop + $section.height();
          
          if (scrollDistance > (elementTop - headerHeight) && scrollDistance < (elementBottom - headerHeight)) {
              $menuButtons.removeClass('active');
              const sectionId = $section.prop('id');
              $menuButtons.siblings('[href="#'+sectionId+'"]').addClass('active');
              return false; // break the loop
          }
      });
  });
});














