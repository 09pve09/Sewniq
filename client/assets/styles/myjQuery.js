// When the user clicks on the button, scroll to the top of the document
  // function topFunction() {
  //     document.body.scrollTop = 0;
  //     document.documentElement.scrollTop = 0;
  // }

$(document).ready(function(){
  console.log("jquery is here!");

  // slideUpanimation with wow.js
  new WOW().init();

  // jQuery to collapse the navbar on scroll
  function collapseNavbar() {
      if ($(".navbar").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
  };

  $(window).scroll(collapseNavbar);
  $(document).ready(collapseNavbar);

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {
      $('a.page-scroll').bind('click', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
          }, 1500, 'easeInOutExpo');
          event.preventDefault();
      });
  });

// ScrollUpButton
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
          document.getElementById("scrollupBtn").style.display = "block";
      } else {
          document.getElementById("scrollupBtn").style.display = "none";
      }
  }

  $("#scrollupBtn").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "2000");
    return false;
  });
});
