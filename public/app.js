// Website preloader DO NOT REMOVE
(function ($) {
  "use strict";

  $(window).on("load", function () {
    function heightCount() {
      var poInHeight = $(".post_info_wrapper").outerHeight();
      $(".post_info_wrapper .blog_post_img .post_date_month").css({
        height: poInHeight + "px",
      });
    }
    heightCount();

    /*===========Portfolio isotope js===========*/

    $(".loader-container").fadeOut(); // will first fade out the loading animation
    $(".loader").delay(150).fadeOut("slow"); // will fade out the white DIV that covers the website.
    $("body").delay(150).css({ overflow: "visible" });
  });

  function clients_slider() {
    var clients_slider = $(".clients-slider");
    if (clients_slider.length) {
      $(".clients-slider").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        arrows: false,
        dots: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      });
    }
  }
  clients_slider();

  /*=========== onFocusInput js===========*/
  function onFocusInput() {
    $(".search-field").on("focus", function () {
      $(this).parent().addClass("active");
    });
    $(".search-field").on("blur", function () {
      $(this).parent().removeClass("active");
    });
  }
  onFocusInput();

  /*
     =======================================================================
     Page nav
     =======================================================================
     */
  /*
     * ----------------------------------------------------------------------------------------
     *  PROGRESS BAR JS
     * ----------------------------------------------------------------------------------------
     /*---------------------------------------
     SKILLS PROGRESS BAR
     ---------------------------------------*/
  try {
    jQuery("#bt-ourskill").appear(function () {
      jQuery(".bt-skillholder").each(function () {
        jQuery(this)
          .find(".bt-skillbar")
          .animate(
            {
              width: jQuery(this).attr("data-percent"),
            },
            2500
          );
      });
    });
  } catch (err) {}
  /*---------------------------------------
     SKILLS PROGRESS BAR
     ---------------------------------------*/
  function adddingPlaceholders() {
    $(".comment-form textarea#comment").attr("placeholder", "Comment");
    $(".comment-form input#author").attr("placeholder", "Name");
    $(".comment-form input#email").attr("placeholder", "Email");
  }
  adddingPlaceholders();

  /*===========Start testimonialdslider js ===========*/
  function testimonialdslider() {
    var testimonial_carousel = $(".testimonial-carousel");
    if (testimonial_carousel.length) {
      testimonial_carousel.owlCarousel({
        loop: true,
        margin: 30,
        items: 1,
        thumbs: false,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        dotsSpeed: 600,
      });
    }
  }
  testimonialdslider();
  /*===========End testimonialdslider js ===========*/

  /*===========Start blogCarousel js ===========*/
  function blogCarousel() {
    var blog_carousel = $(".blog-carousel");
    if (blog_carousel.length) {
      blog_carousel.owlCarousel({
        loop: true,
        margin: 30,
        items: 2,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        dotsSpeed: 600,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            margin: 0,
          },
          650: {
            items: 2,
          },
        },
      });
    }
  }
  blogCarousel();
  /*===========End blogCarousel js ===========*/

  /*===========Start blog-carousel2 js ===========*/
  function blog_2Carousel() {
    var blog_carousels = $(".blog-carousel2");
    if (blog_carousels.length) {
      blog_carousels.owlCarousel({
        loop: true,
        margin: 30,
        items: 3,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        dotsSpeed: 600,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
          },
          650: {
            items: 2,
          },
          992: {
            items: 3,
          },
        },
      });
    }
  }
  blog_2Carousel();
  /*===========End blogCarousel2 js ===========*/

  /*===========Start testimonialdslider js ===========*/
  function servicesSlider() {
    var clients_slider = $(".services-slider");
    if (clients_slider.length) {
      clients_slider.owlCarousel({
        loop: true,
        margin: 30,
        items: 3,
        nav: false,
        autoplay: true,
        smartSpeed: 2000,
        dotsSpeed: 600,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            margin: 0,
          },
          500: {
            items: 2,
            margin: 10,
          },
          992: {
            items: 3,
          },
        },
      });
    }
  }
  servicesSlider();
  /*===========End testimonialdslider js ===========*/

  /*===========Start Counter js ===========*/
  function counting_data() {
    var counter = $(".counter");
    if (counter.length) {
      counter.counterUp({
        delay: 10,
        time: 2000,
      });
    }
  }
  counting_data();
  /*===========End Counter js ===========*/

  /*============= scrool js  ==============*/
  function scroolEffect() {
    if ($(".wrapper").length) {
      $("#fullpage").fullpage({
        sectionSelector: ".op-section",
        navigation: true,
        slidesNavigation: true,
        controlArrows: false,
        scrollOverflow: true,
      });
    }
  }
  scroolEffect();

  // full screen side nav
  $(".burger-icon,#open-button").on("click", function () {
    $(".canvas-menu,.left_offcanvas_menu,.offcanvas_closer").toggleClass(
      "mySideBar"
    );
    $(this).toggleClass("actives");
  });
  $(".canvas-menu ul >li a,.close,.offcanvas_closer").on("click", function () {
    $(".canvas-menu,.left_offcanvas_menu,.offcanvas_closer").removeClass(
      "mySideBar"
    );
    $(".close,#open-button").removeClass("actives");
  });

  /*==========  Header  ==========*/
  $("#nav>li").each(function (index) {
    index = (index + 2) * 0.1;
    index = index + "s";
    $(this).css("animation-delay", index);
  });

  // (function() {
  //     if( $('.is-type-video').length ) {
  //         $('.is-type-video').fitVids();
  //     }
  // })();
})(jQuery);

// Custom Javascript

//Navigation scroll function
let a = document.querySelectorAll(".nav-link");

a.forEach((item) => {
  item.addEventListener("click", (e) => {
    window.scrollTo({
      top: document.getElementById(e.path[0].name).offsetTop,
      behavior: "smooth",
    });
  });
});

//Navigation background and hamburger menu pop-up when window top is not 0px

window.addEventListener("load", () => {
  if (window.top.scrollY < 0) {
    navPos.classList.add("navbar-scroll");
    window.scrollY == 0
      ? navList.classList.remove("active")
      : navList.classList.add("active");
    window.scrollY == 0
      ? hamburger.classList.remove("active")
      : hamburger.classList.add("active");
  }
});

let navPos = document.querySelector(".navbar");
let navList = document.querySelector("#menu-primary");
let navList2 = document.querySelector(".scrolling-nav");
let hamburger = document.querySelector(".hamburger");
window.addEventListener("scroll", () => {
  window.scrollY == 0
    ? navPos.classList.remove("navbar-scroll")
    : navPos.classList.add("navbar-scroll");
  window.scrollY == 0
    ? navList.classList.remove("active")
    : navList.classList.add("active");
  window.scrollY == 0
    ? hamburger.classList.remove("active")
    : hamburger.classList.add("active");
  if (window.scrollY == 0) hamburger.classList.remove("open");
  if (window.scrollY == 0) navList2.classList.remove("active");
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navList2.classList.toggle("active");
});

// projects
const container = document.querySelector(".container");
const projects = document.querySelectorAll(".project");
const projectHideBtn = document.querySelector(".project-hide-btn");

projects.forEach((project, i) => {
  project.addEventListener("mouseenter", () => {
    project.firstElementChild.style.top = `-${
      project.firstElementChild.offsetHeight - project.offsetHeight
    }px`;
  });
  project.addEventListener("mouseleave", () => {
    project.firstElementChild.style.top = "2rem";
  });

  // Big Project Img
  project.addEventListener("click", () => {
    const bigImgWrapper = document.createElement("div");
    bigImgWrapper.className = "project-img-wrapper";
    container.appendChild(bigImgWrapper);

    const bigImg = document.createElement("img");
    bigImg.className = "project-img";
    const ImgPath = project.firstElementChild.getAttribute("src").split(".")[0];
    // console.log(ImgPath);
    bigImg.setAttribute("src", `${ImgPath}-big.jpg`);
    bigImgWrapper.appendChild(bigImg);
    bigImgWrapper.appendChild(projectHideBtn);
    document.body.style.overflowY = "hidden";

    projectHideBtn.classList.add("change");

    projectHideBtn.onclick = () => {
      projectHideBtn.classList.remove("change");
      bigImgWrapper.remove();
      document.body.style.overflowY = "scroll";
    };
  });

  // End Big Project Img
  i >= 6 && (project.style.cssText = "display: none; opacity: 0;");
});

// projects button
//  const section3 = document.querySelector(".section-3");
//  const projectsBtn = document.querySelector(".project-hide-btn");
//  const projectsBtnText = document.querySelector(".project-hide-btn span");
//  let showHideBool = true;

//  const showProjects = (project, i) => {
//    setTimeout(() => {
//      project.style.display = "flex";
//      section3.scrollIntoView({ block: "end" });
//    }, 600);
//    setTimeout(() => {
//      project.style.opacity = "1";
//    }, i * 200);
//  };
//  const hideProjects = (project, i) => {
//    setTimeout(() => {
//      project.style.display = "none";
//      section3.scrollIntoView({ block: "end" });
//    }, 1200);
//    setTimeout(() => {
//      project.style.opacity = "0";
//    }, i * 100);
//  };

//  projectsBtn.addEventListener("click", (e) => {
//    e.preventDefault();

//    projectsBtn.firstElementChild.nextElementSibling.classList.toggle("change");

//    showHideBool
//      ? (projectsBtnText.textContent = "Show Less")
//      : (projectsBtnText.textContent = "Show More");

//    projects.forEach((project, i) => {
//      i >= 6 &&
//        (showHideBool ? showProjects(project, i) : hideProjects(project, i));
//    });
//    showHideBool = !showHideBool;
//  });

// end projects button

// end projects

// slideshow
const slideShow = document.querySelector(".slideshow");

setInterval(() => {
  const firstIcon = slideShow.firstElementChild;

  firstIcon.classList.add("faded-out");

  const thirdIcon = slideShow.children[3];

  thirdIcon.classList.add("light");

  thirdIcon.previousElementSibling.classList.remove("light");

  setTimeout(() => {
    slideShow.removeChild(firstIcon);

    slideShow.appendChild(firstIcon);

    setTimeout(() => {
      firstIcon.classList.remove("faded-out");
    }, 500);
  }, 500);
}, 3000);
// end slideshow
