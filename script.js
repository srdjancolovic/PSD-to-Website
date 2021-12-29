"use-strict";

//History images slider
const swiper = new Swiper(".history__imgs", {
  spaceBetween: 10,
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 2,
    },
    300: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

////Smooth scroll
$(".link").on("click", function (e) {
  if (this.hash !== "") {
    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      1000
    );
  }
});

//Tabs and accordion functionality
$(".slide__content").hide();
$(".slide__content:first").show();
$("#first__tab__btn").addClass("tab__button__active");
$("#first__accordion__btn").addClass("accordion__btn__active");

//For desktop (tabs)
$(".tab__button").click(function () {
  $(".slide__content").hide();
  const active = $(this).attr("rel");
  $("#" + active).fadeIn();

  $(".tab__button").removeClass("tab__button__active");
  $(this).addClass("tab__button__active");

  $(".accordion__btn").removeClass("accordion__btn__active");
  $(".accordion__btn[rel^='" + active + "']").addClass(
    "accordion__btn__active"
  );
});

//For mobile devices (accordion)
$(".accordion__btn").click(function () {
  $(".slide__content").hide();
  const active = $(this).attr("rel");
  $("#" + active).fadeIn();

  $(".accordion__btn").removeClass("accordion__btn__active");
  $(this).addClass("accordion__btn__active");

  $(".tab__button").removeClass("tab__button__active");
  $(".tab__button[rel^='" + active + "']").addClass("tab__button__active");
});
