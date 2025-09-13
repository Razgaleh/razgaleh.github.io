(function () {
  "use strict";

  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  var fullHeight = function () {
    if (!isMobile.any()) {
      $(".js-fullheight").css("height", $(window).height());
      $(window).resize(function () {
        $(".js-fullheight").css("height", $(window).height());
      });
    }
  };

  var counter = function () {
    $(".js-counter").countTo({
      formatter: function (value, options) {
        return value.toFixed(options.decimals);
      },
    });
  };

  var counterWayPoint = function () {
    if ($("#colorlib-counter").length > 0) {
      $("#colorlib-counter").waypoint(
        function (direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            setTimeout(counter, 100); // Reduced from 400ms to 100ms
            $(this.element).addClass("animated");
          }
        },
        { offset: "80%" } // Reduced from 90% to 80% for earlier triggering
      );
    }
  };

  // Animations with improved performance
  var contentWayPoint = function () {
    var i = 0;
    var animatedElements = new Set(); // Track animated elements to prevent re-animation
    
    $(".animate-box").waypoint(
      function (direction) {
        var element = this.element;
        if (direction === "down" && !$(element).hasClass("animated") && !animatedElements.has(element)) {
          i++;
          animatedElements.add(element);

          $(element).addClass("item-animate");
          setTimeout(function () {
            $("body .animate-box.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn animated");
                  } else if (effect === "fadeInLeft") {
                    el.addClass("fadeInLeft animated");
                  } else if (effect === "fadeInRight") {
                    el.addClass("fadeInRight animated");
                  } else {
                    el.addClass("fadeInUp animated");
                  }

                  el.removeClass("item-animate");
                },
                k * 30, // Further reduced to 30ms for even faster loading
                "easeInOutExpo"
              );
            });
          }, 25); // Further reduced to 25ms
        }
      },
      { offset: "70%" } // Further reduced to 70% for even earlier triggering
    );
  };

  var burgerMenu = function () {
    $(".js-colorlib-nav-toggle").on("click", function (event) {
      event.preventDefault();
      var $this = $(this);

      if ($("body").hasClass("offcanvas")) {
        $this.removeClass("active");
        $("body").removeClass("offcanvas");
      } else {
        $this.addClass("active");
        $("body").addClass("offcanvas");
      }
    });
  };

  // Click outside of offcanvass
  var mobileMenuOutsideClick = function () {
    $(document).click(function (e) {
      var container = $("#colorlib-aside, .js-colorlib-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("offcanvas")) {
          $("body").removeClass("offcanvas");
          $(".js-colorlib-nav-toggle").removeClass("active");
        }
      }
    });

    // Scroll handler removed - mobile menu stays open when scrolling
  };

  var clickMenu = function () {
    $('#navbar a:not([class="external"])').click(function (event) {
      var section = $(this).data("nav-section"),
        navbar = $("#navbar");

      if ($('[data-section="' + section + '"]').length) {
        $("html, body").animate(
          {
            scrollTop: $('[data-section="' + section + '"]').offset().top - 55,
          },
          {
            duration: 300, // Slightly longer for smoother feel
            easing: "swing", // Smooth easing
            complete: function() {
              // Ensure we're at the exact position
              $("html, body").scrollTop($('[data-section="' + section + '"]').offset().top - 55);
            }
          }
        );
      }

      if (navbar.is(":visible")) {
        navbar.removeClass("in");
        navbar.attr("aria-expanded", "false");
        $(".js-colorlib-nav-toggle").removeClass("active");
      }

      event.preventDefault();
      return false;
    });
  };

  // General navigation handler for all elements with data-nav-section
  var generalNavigation = function () {
    $('a[data-nav-section]').click(function (event) {
      var section = $(this).data("nav-section");
      
      if ($('[data-section="' + section + '"]').length) {
        $("html, body").animate(
          {
            scrollTop: $('[data-section="' + section + '"]').offset().top - 55,
          },
          {
            duration: 300,
            easing: "swing",
            complete: function() {
              $("html, body").scrollTop($('[data-section="' + section + '"]').offset().top - 55);
            }
          }
        );
      }

      event.preventDefault();
      return false;
    });
  };

  // Reflect scrolling in navigation
  var navActive = function (section) {
    var $el = $("#navbar > ul");
    $el.find("li").removeClass("active");
    $el.each(function () {
      $(this)
        .find('a[data-nav-section="' + section + '"]')
        .closest("li")
        .addClass("active");
    });
  };

  var navigationSection = function () {
    var $section = $("section[data-section]");

    $section.waypoint(
      function (direction) {
        if (direction === "down") {
          navActive($(this.element).data("section"));
          // Add fade-in effect to section
          $(this.element).addClass("fade-in");
        }
      },
      {
        offset: "100px", // Reduced from 150px for faster response
      }
    );

    $section.waypoint(
      function (direction) {
        if (direction === "up") {
          navActive($(this.element).data("section"));
          // Add fade-in effect to section
          $(this.element).addClass("fade-in");
        }
      },
      {
        offset: function () {
          return -$(this.element).height() + 100; // Reduced from 155 for faster response
        },
      }
    );
  };

  // Fade in first section immediately
  var fadeInFirstSection = function () {
    var $firstSection = $("section[data-section]").first();
    if ($firstSection.length) {
      $firstSection.addClass("fade-in");
    }
  };

  var sliderMain = function () {
    $("#colorlib-hero .flexslider").flexslider({
      animation: "fade",
      slideshowSpeed: 5000,
      directionNav: true,
      start: function () {
        setTimeout(function () {
          $(".slider-text").removeClass("animated fadeInUp");
          $(".flex-active-slide")
            .find(".slider-text")
            .addClass("animated fadeInUp");
        }, 500);
      },
      before: function () {
        setTimeout(function () {
          $(".slider-text").removeClass("animated fadeInUp");
          $(".flex-active-slide")
            .find(".slider-text")
            .addClass("animated fadeInUp");
        }, 500);
      },
    });
  };

  var stickyFunction = function () {
    var h = $(".image-content").outerHeight();

    // Check if StickyKit is available
    if (typeof $.fn.stick_in_parent === 'function') {
      if ($(window).width() <= 992) {
        $("#sticky_item").trigger("sticky_kit:detach");
      } else {
        $(".sticky-parent").removeClass("stick-detach");
        $("#sticky_item").trigger("sticky_kit:detach");
        $("#sticky_item").trigger("sticky_kit:unstick");
      }

      $(window).resize(function () {
        var h = $(".image-content").outerHeight();
        $(".sticky-parent").css("height", h);

        if ($(window).width() <= 992) {
          $("#sticky_item").trigger("sticky_kit:detach");
        } else {
          $(".sticky-parent").removeClass("stick-detach");
          $("#sticky_item").trigger("sticky_kit:detach");
          $("#sticky_item").trigger("sticky_kit:unstick");

          $("#sticky_item").stick_in_parent();
        }
      });
    } else {
      // Fallback: just set the height without sticky functionality
      console.log("StickyKit not available, using fallback layout");
    }

    $(".sticky-parent").css("height", h);
  };

  // Document on load.
  $(function () {
    fullHeight();
    counter();
    counterWayPoint();
    contentWayPoint();
    burgerMenu();

    clickMenu();
    generalNavigation();
    navigationSection();
    fadeInFirstSection(); // Fade in first section immediately

    mobileMenuOutsideClick();
    sliderMain();
    stickyFunction();
    detectDayNightMode();
  });
})();

var Accordion = function (el, multiple) {
  this.el = el || {};
  this.multiple = multiple || false;
  // Variables privadas
  var links = this.el.find(".link");
  // Evento
  links.on("click", { el: this.el, multiple: this.multiple }, this.dropdown);

  // Open the first section by default - DISABLED
  // var firstItem = this.el.find("li:first-child");
  // firstItem.addClass("open");
  // firstItem.find(".submenu").show();
};

Accordion.prototype.dropdown = function (e) {
  var $el = e.data.el;
  ($this = $(this)), ($next = $this.next());

  $next.slideToggle();
  $this.parent().toggleClass("open");

  if (!e.data.multiple) {
    $el.find(".submenu").not($next).slideUp().parent().removeClass("open");
  }
};

var accordion = new Accordion($("#accordion"), false);


function enableDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function detectDayNightMode() {
  // const hours = new Date().getHours();
  // const isDayTime = hours > 6 && hours < 20;
  // if (isDayTime === true) {
  enableDarkMode();
  // } else {
    // enableDarkMode();
  // }
}




