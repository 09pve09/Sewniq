$(window).on('load', function() {
   $("#cover").fadeOut(1000);
});


$(document).ready(function(){
  // jQuery to collapse the navbar on scroll
  function collapseNavbar() {
      if ($(".navbar").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
  };

  $('#Carousel-quotes-1').carousel();

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

  $("#headerScroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#clock").offset().top
    }, 500);
  });

//closemodal and scrolling to the element when clicking on the link
  $( ".link" ).click(function() {
    var closeBtn = document.getElementById("closeBtn");
    simulateClick(closeBtn);
    goToByScroll($(this).attr('href'));
  })


// Helper functions
  var simulateClick = function (elem) {
    var evt = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });
    var canceled = !elem.dispatchEvent(evt);
  };

  function goToByScroll(id){
      $('html,body').animate({scrollTop: $(id).offset().top},'fast');
  }


//CHARTS
var saleCanvas = document.getElementById("saleChart").getContext('2d');
var revenueCanvas = document.getElementById("revenueChart").getContext('2d');
sales_data = {
    labels: ['Purchases', 'Bounty', 'Founders', 'Legal Entity'],
    datasets: [{
      backgroundColor: [
        "#FF9273",
        "#E2667E",
        "#B0498E",
        "#693F91"
      ],
      data: [70,10,10,10]
    }]
}
revenue_data = {
    labels: ['Development', 'Operation', 'Marketing', 'Legal'],
    datasets: [{
      backgroundColor: [
        "#2ce5d5",
        "#00c1e0",
        "#0097d6",
        "#586cb3"
      ],
      data: [70,10,10,10]
    }]
}
//PIE ANIMATION


  let inView = false;

  function isScrolledIntoView(elem){
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();

      return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
  }

  $(window).scroll(function() {
      if (isScrolledIntoView('#saleChart') && inView == false) {
          inView = true;
          var saleChart = new Chart(saleCanvas, {
            type: 'doughnut',
            data: sales_data
          });
          var revenueChart = new Chart(revenueCanvas, {
            type: 'doughnut',
            data: revenue_data
          });
      }
  });

});
