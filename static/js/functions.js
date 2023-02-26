function convertHex(a, c) {
  return (
    (a = a.replace("#", "")),
    (r = parseInt(a.substring(0, 2), 16)),
    (g = parseInt(a.substring(2, 4), 16)),
    (b = parseInt(a.substring(4, 6), 16)),
    (result = "rgba(" + r + ", " + g + ", " + b + ", " + c + ")"),
    result
  );
}
!(function (a) {
  "use strict";
  function e() {
    a("*[data-pattern-overlay-darkness-opacity]").each(function () {
      var b = a(this).data("pattern-overlay-darkness-opacity");
      a(this).css("background-color", convertHex("#000000", b));
    }),
      a("*[data-pattern-overlay-background-image]").each(function () {
        "none" == a(this).data("pattern-overlay-background-image")
          ? a(this).css("background-image", "none")
          : "yes" == a(this).data("pattern-overlay-background-image") &&
            a(this).css("background-image");
      }),
      a("*[data-remove-pattern-overlay]").each(function () {
        "yes" == a(this).data("remove-pattern-overlay") &&
          a(this).css("background", "none");
      }),
      a("*[data-bg-color]").each(function () {
        var b = a(this).data("bg-color");
        a(this).css("background-color", b);
      }),
      a("*[data-bg-color-opacity]").each(function () {
        var b = a(this).data("bg-color-opacity"),
          c = a(this).css("background-color"),
          d = c.replace("rgb", "rgba").replace(")", ", " + b + ")");
        a(this).css("background-color", d);
      }),
      a("*[data-bg-img]").each(function () {
        var b = a(this).data("bg-img");
        a(this).css("background-image", "url('" + b + "')");
      }),
      a("*[data-parallax-bg-img]").each(function () {
        var b = a(this).data("parallax-bg-img");
        a(this).css(
          "background-image",
          "url('/static/images/files/parallax-bg/" + b + "')"
        );
      });
  }
  function f() {
    var a = jRespond([
      { label: "smallest", enter: 0, exit: 479 },
      { label: "handheld", enter: 480, exit: 767 },
      { label: "tablet", enter: 768, exit: 991 },
      { label: "laptop", enter: 992, exit: 1199 },
      { label: "desktop", enter: 1200, exit: 1e4 },
    ]);
    a.addFunc([
      {
        breakpoint: "desktop",
        enter: function () {
          d.addClass("device-lg");
        },
        exit: function () {
          d.removeClass("device-lg");
        },
      },
      {
        breakpoint: "laptop",
        enter: function () {
          d.addClass("device-md");
        },
        exit: function () {
          d.removeClass("device-md");
        },
      },
      {
        breakpoint: "tablet",
        enter: function () {
          d.addClass("device-sm");
        },
        exit: function () {
          d.removeClass("device-sm");
        },
      },
      {
        breakpoint: "handheld",
        enter: function () {
          d.addClass("device-xs");
        },
        exit: function () {
          d.removeClass("device-xs");
        },
      },
      {
        breakpoint: "smallest",
        enter: function () {
          d.addClass("device-xxs");
        },
        exit: function () {
          d.removeClass("device-xxs");
        },
      },
    ]);
  }
  function i() {
    a("#website-loading").find(".loader").delay(0).fadeOut(500),
      a("#website-loading").delay(600).fadeOut(300);
  }
  function j() {
    a("#full-container").fitVids();
  }
  function k() {
    a(".img-bg").each(function () {
      var b = a(this).find("img").attr("src");
      a(this).css("background-image", "url('" + b + "')"),
        a(this).find("img").css({ opacity: 0, visibility: "hidden" });
    });
  }
  function l() {
    a(".fullscreen").css("height", a(window).height());
  }
  function m() {
    var b = a(document).height(),
      c = a(window).height(),
      d = b - c,
      e = a(document).scrollTop(),
      f = e / (d / 100);
    a("#scroll-progress").width(f + "%"),
      a(".scroll-percent").text(f.toFixed(0) + "%");
  }
  function n() {
    a(window).scrollTop();
    a(window).scrollTop() > 800
      ? a(".scroll-top").addClass("show")
      : a(".scroll-top").removeClass("show");
  }
  function o() {
    a(function () {
      (d.hasClass("device-lg") ||
        d.hasClass("device-md") ||
        d.hasClass("device-sm")) &&
        a.stellar({
          horizontalScrolling: !1,
          verticalOffset: 0,
          responsive: !0,
        });
    });
  }
  function p() {
    a("#main-menu")
      .clone()
      .appendTo("#mobile-menu")
      .removeClass()
      .addClass("mobile-menu");
    var b = document.querySelector("#mobile-menu");
    SimpleScrollbar.initEl(b),
      a(".mobile-menu").superfish({
        popUpSelector: "ul, .megamenu",
        cssArrows: !0,
        delay: 300,
        speed: 150,
        speedOut: 150,
        animation: { opacity: "show", height: "show" },
        animationOut: { opacity: "hide", height: "hide" },
      }),
      a(".mobile-menu-btn").on("click", function (b) {
        b.preventDefault(),
          a(this).toggleClass("is-active"),
          a("#mobile-menu").slideToggle(250);
      });
  }
  function q() {
    a(".main-menu").superfish({
      popUpSelector: "ul",
      cssArrows: !0,
      delay: 300,
      speed: 100,
      speedOut: 100,
      animation: { opacity: "show" },
      animationOut: { opacity: "hide" },
    });
  }
  function r() {
    a.scrollIt({
      upKey: !1,
      downKey: !1,
      scrollTime: 0,
      activeClass: "current",
      onPageChange: null,
      topOffset: -90,
    }),
      a("#main-menu li a").on("click", function (b) {
        b.preventDefault();
        var c = a(this);
        a("html, body")
          .stop()
          .animate(
            { scrollTop: a(c.attr("href")).offset().top - 90 },
            1200,
            "easeInOutExpo"
          );
        var e =
          d.hasClass("device-sm") ||
          d.hasClass("device-xs") ||
          d.hasClass("device-xxs");
        e &&
          (a("#mobile-menu").slideUp(250),
          a(".mobile-menu-btn").removeClass("is-active"));
      });
  }
  function s() {
    var b = a("#header").offset().top,
      c = a(window).scrollTop(),
      d = a("#header"),
      e = parseInt(a("#header").height(), 10),
      f = parseInt(a(".banner-parallax").height(), 10);
    d.hasClass("style-2")
      ? c > f - e - 120
        ? d.addClass("sticky")
        : d.removeClass("sticky")
      : c > b
      ? d.addClass("sticky")
      : d.removeClass("sticky");
  }
  function t() {
    var b = a(".banner-slider > .owl-carousel");
    b.owlCarousel({
      items: 1,
      rtl: h,
      autoplay: !1,
      autoplaySpeed: 600,
      autoplayTimeout: 3e3,
      dragEndSpeed: 500,
      autoplayHoverPause: !0,
      loop: !0,
      slideBy: 1,
      margin: 10,
      stagePadding: 0,
      nav: !1,
      dots: !0,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      responsive: { 0: {}, 480: {}, 768: {} },
      autoHeight: !1,
      autoWidth: !1,
      navRewind: !0,
      center: !1,
      dotsEach: 1,
      dotData: !1,
      lazyLoad: !1,
      smartSpeed: 600,
      fluidSpeed: 5e3,
      navSpeed: 500,
      dotsSpeed: 500,
    }),
      b.on("translated.owl.carousel", function (a) {
        var c = b.find(".owl-item.active .banner-center-box"),
          d = parseInt(c.children("h1, .description, .btn").css("top"), 10);
        0 != d &&
          (console.log("It's the next...."),
          console.log("Same Slide!"),
          setTimeout(function () {
            setTimeout(function () {
              c.children("h1")
                .css("top", 100)
                .animate({ opacity: 1 }, { duration: 400, queue: !1 })
                .animate({ top: 0 }, { duration: 600, easing: "easeOutExpo" });
            }, 0),
              setTimeout(function () {
                c.children(".description")
                  .css("top", 100)
                  .animate({ opacity: 1 }, { duration: 400, queue: !1 })
                  .animate(
                    { top: 0 },
                    { duration: 600, easing: "easeOutExpo" }
                  );
              }, 100),
              setTimeout(function () {
                c.children(".btn")
                  .css("top", 100)
                  .animate({ opacity: 1 }, { duration: 400, queue: !1 })
                  .animate(
                    { top: 0 },
                    { duration: 600, easing: "easeOutExpo" }
                  );
              }, 200);
          }, 150));
      }),
      b.on("drag.owl.carousel", function (a) {
        b.find(".owl-item:not( .active )")
          .find(".banner-center-box > *")
          .animate({ opacity: 0 }, 150)
          .css("top", 1);
      }),
      b.on("changed.owl.carousel", function (a) {
        b.find(".banner-center-box > *")
          .animate({ opacity: 0 }, 150)
          .css("top", 1);
      }),
      b.on("resized.owl.carousel", function (a) {
        b.find(".banner-center-box > *").animate({ opacity: 1 }, 150);
      });
  }
  function u() {
    var b = a(window).scrollTop(),
      c = a(".banner-slider").height() + a("#header").height();
    (d.hasClass("device-lg") ||
      d.hasClass("device-md") ||
      d.hasClass("device-sm")) &&
      (b < c &&
        a(".banner-slider").css({ transform: "translateY(" + 0.4 * b + "px)" }),
      b < c && a(".slide-content").css({ opacity: 1 - (b - 120) / 400 }));
  }
  function w() {
    a(".slider-img-bg .owl-item > li").each(function () {
      var b = a(this).find(".slide").children("img").attr("src");
      a(this).css({
        "background-image": "url('" + b + "')",
        "background-color": "#ccc",
        "background-position": "top center",
        "background-size": "cover",
        "background-repeat": "no-repeat",
      });
    });
  }
  function x() {
    a(".slider-img-bg").each(function () {
      var b = a(this).closest("div").height();
      a(".banner-parallax").children(".banner-slider").length > 0 &&
        a(".banner-parallax").height(a(".banner-slider").height()),
        a(this)
          .find(".owl-item > li .slide")
          .children("img")
          .css({ display: "block", height: b, opacity: 0 });
    });
  }
  function y() {
    a(".video-background").each(function () {
      a(this).YTPlayer({
        mute: !1,
        autoPlay: !0,
        opacity: 1,
        containment: ".video-background",
        showControls: !1,
        startAt: 0,
        addRaster: !0,
        showYTLogo: !1,
        stopMovieOnBlur: !1,
      });
    });
  }
  function z() {
    var b = a(".os-tabs > .active"),
      c = a(".os-tabs-content"),
      d = c.find(".active"),
      e = d.outerHeight();
    d.show(),
      c.height(e),
      a(".os-tabs > li").on("click", function () {
        a(this).hasClass("active") ||
          (a(".os-tabs > li").removeClass("active"),
          a(this).addClass("active"),
          (b = a(".os-tabs .active")),
          d.fadeOut(200, function () {
            a(".os-tabs-content > li").removeClass("active");
            var f = b.index();
            a(".os-tabs-content > li").eq(f).addClass("active"),
              (d = a(".os-tabs-content > .active")),
              (e = d.outerHeight()),
              c
                .stop()
                .delay(0)
                .animate({ height: e }, 200, function () {
                  d.delay(50)
                    .css("top", 30)
                    .animate({ top: 0 }, { duration: 250, queue: !1 })
                    .fadeIn(200);
                });
          }));
      });
  }
  function B() {
    a(".portfolio-categories a").on("click", function (b) {
      b.preventDefault(),
        a(".portfolio-categories a").removeClass("active"),
        a(this).addClass("active");
      var c = a(this).data("filter");
      A.isotope({ filter: c });
    }),
      A.isotope({});
    var b = 0;
    a(".loadmore-pi").click(function (c) {
      c.preventDefault();
      var e = a(this).text(),
        f = a(this).data("text-loading"),
        g = a(this).data("text-loading-finished"),
        h = f ? f : "Loading!",
        i = g ? g : "No More!",
        j = a(".portfolio-items").data("pi-load-file"),
        l = j ? j : "loadmore-portfolio-items.html";
      a(this).addClass("loading").find("span").text(h),
        a.ajax({
          type: "GET",
          url: l,
          success: function (c) {
            a(".portfolio-items").waitForImages({
              finished: function () {
                console.log(".portfolio-items background image loaded"),
                  setTimeout(function () {
                    a(".loadmore-pi")
                      .removeClass("loading")
                      .find("span")
                      .text(e);
                  }, 2500),
                  setTimeout(function () {
                    var f,
                      e = a(c).find(".portfolio-item").length;
                    d.hasClass("device-lg")
                      ? (f = 4)
                      : d.hasClass("device-md")
                      ? (f = 3)
                      : d.hasClass("device-sm") || d.hasClass("device-xs")
                      ? (f = 2)
                      : d.hasClass("device-xxs") && (f = 1);
                    var g = b + f,
                      h = a(c)
                        .find(".portfolio-item")
                        .slice(b, g)
                        .addClass("loaded")
                        .appendTo(".portfolio-items");
                    if (
                      ((b = b + f <= e ? b + f : e),
                      k(),
                      D(),
                      H(),
                      A.isotope("appended", h),
                      b >= e)
                    )
                      return (
                        a(".loadmore-pi")
                          .removeClass("colorful")
                          .addClass("dark animated shake")
                          .text(i),
                        !1
                      );
                  }, 3e3);
              },
              waitForAll: !0,
            });
          },
        });
    });
  }
  function C() {
    var b = a(".portfolio-single-slider > .owl-carousel");
    b.owlCarousel({
      items: 1,
      rtl: h,
      autoplay: !0,
      autoplaySpeed: 600,
      autoplayTimeout: 3e3,
      dragEndSpeed: 500,
      autoplayHoverPause: !0,
      loop: !0,
      slideBy: 1,
      margin: 10,
      stagePadding: 0,
      nav: !1,
      dots: !1,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      responsive: { 0: {}, 480: {}, 768: {} },
      autoHeight: !1,
      autoWidth: !1,
      navRewind: !0,
      center: !1,
      dotsEach: 1,
      dotData: !1,
      lazyLoad: !1,
      smartSpeed: 600,
      fluidSpeed: 5e3,
      navSpeed: 500,
      dotsSpeed: 500,
    }),
      a(".portfolio-single-slider .controls")
        .find(".next")
        .click(function () {
          b.trigger("next.owl.carousel");
        }),
      a(".portfolio-single-slider .controls")
        .find(".prev")
        .click(function () {
          b.trigger("prev.owl.carousel");
        });
  }
  function D() {
    !(function () {
      a(".portfolio-item .portfolio-single-link").on("click", function () {
        a("#portfolio-single-content").removeClass("opened");
        var d,
          b = a(window).scrollTop() + 90,
          c = parseInt(a(".portfolio-top").offset().top, 10);
        b !== c
          ? (a("html, body").animate(
              { scrollTop: a(".portfolio-top").offset().top - 90 },
              { easing: "easeInOutExpo", duration: 1e3 }
            ),
            (d = 1200))
          : (d = 0);
        var f =
          a(this).find(".open-portfolio-single").attr("href") +
          " .portfolio-single-load";
        setTimeout(function () {
          a("#portfolio-single-wrap")
            .addClass("opened")
            .animate({ height: 95 }, 0, function () {
              setTimeout(function () {
                a(".portfolio-single-loader").addClass("opened"),
                  setTimeout(function () {
                    a("#portfolio-single-content").load(f, function (b) {
                      a("#portfolio-single-content").waitForImages({
                        finished: function () {
                          a("#portfolio-single-wrap").removeClass("opened"),
                            a(".portfolio-single-loader").removeClass("opened"),
                            C(),
                            w(),
                            x(),
                            e(),
                            setTimeout(function () {
                              a(
                                "#portfolio-single-wrap, #portfolio-single-content"
                              ).height(
                                a(".portfolio-single-load").outerHeight()
                              ),
                                a("#portfolio-single-content").addClass(
                                  "opened"
                                );
                            }, 500);
                        },
                        waitForAll: !0,
                      });
                    });
                  }, 1e3);
              }, 600);
            });
        }, d);
      }),
        a(document).on("click", ".project-close", function (b) {
          return (
            a("#portfolio-single-content").removeClass("opened"),
            a("#portfolio-single-wrap").removeClass("opened"),
            setTimeout(function () {
              a("#portfolio-single-wrap").height(0);
            }, 500),
            setTimeout(function () {
              a(".portfolio-single-load").remove();
            }, 500),
            setTimeout(function () {
              a("html, body").animate(
                { scrollTop: a(".portfolio-top").offset().top - 90 },
                600
              );
            }, 1200),
            !1
          );
        });
    })();
  }
  function E() {
    var b = a(".popular-packages-slider > .owl-carousel");
    b.owlCarousel({
      rtl: h,
      autoplay: !1,
      autoplaySpeed: 600,
      autoplayTimeout: 3e3,
      dragEndSpeed: 500,
      autoplayHoverPause: !0,
      loop: !1,
      slideBy: 1,
      margin: 30,
      stagePadding: 0,
      nav: !1,
      dots: !0,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      responsive: {
        0: { items: 1 },
        480: { items: 1 },
        768: { items: 2 },
        1200: { items: 3 },
      },
      autoHeight: !1,
      autoWidth: !1,
      navRewind: !0,
      center: !1,
      dotsEach: 1,
      dotData: !1,
      lazyLoad: !1,
      smartSpeed: 600,
      fluidSpeed: 5e3,
      navSpeed: 500,
      dotsSpeed: 500,
    }),
      b.on("translated.owl.carousel", function (a) {}),
      b.on("drag.owl.carousel", function (a) {}),
      b.on("changed.owl.carousel", function (a) {});
  }
  function F() {
    a(".lightbox-iframe").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: !1,
      fixedContentPos: !1,
    });
  }
  function G() {
    a(".lightbox-img").magnificPopup({
      type: "image",
      gallery: { enabled: !1 },
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: !1,
      fixedContentPos: !1,
    });
  }
  function H() {
    a(".lightbox-gallery").magnificPopup({
      type: "image",
      gallery: { enabled: !0 },
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: !1,
      fixedContentPos: !1,
    });
  }
  function I() {
    var b = a(".tour-guide-slider > .owl-carousel");
    b.owlCarousel({
      rtl: h,
      autoplay: !1,
      autoplaySpeed: 600,
      autoplayTimeout: 3e3,
      dragEndSpeed: 500,
      autoplayHoverPause: !0,
      loop: 1,
      slideBy: 1,
      margin: 30,
      stagePadding: 0,
      nav: !1,
      dots: !0,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      responsive: {
        0: { items: 1 },
        480: { items: 1 },
        768: { items: 2 },
        1200: { items: 3 },
      },
      autoHeight: !1,
      autoWidth: !1,
      navRewind: !0,
      center: !1,
      dotsEach: 1,
      dotData: !1,
      lazyLoad: !1,
      smartSpeed: 600,
      fluidSpeed: 5e3,
      navSpeed: 500,
      dotsSpeed: 500,
    });
  }
  function J() {
    var b = a(".testmonials-slider > .owl-carousel");
    b.owlCarousel({
      items: 1,
      rtl: h,
      autoplay: !1,
      autoplaySpeed: 600,
      autoplayTimeout: 3e3,
      dragEndSpeed: 500,
      autoplayHoverPause: !0,
      loop: !1,
      slideBy: 1,
      margin: 30,
      stagePadding: 0,
      nav: !1,
      dots: !0,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      responsive: { 0: { items: 1 }, 480: { items: 1 }, 768: { items: 1 } },
      autoHeight: !1,
      autoWidth: !1,
      navRewind: !0,
      center: !1,
      dotsEach: 1,
      dotData: !1,
      lazyLoad: !1,
      smartSpeed: 600,
      fluidSpeed: 5e3,
      navSpeed: 500,
      dotsSpeed: 500,
    }),
      b.on("translated.owl.carousel", function (a) {}),
      b.on("drag.owl.carousel", function (a) {}),
      b.on("changed.owl.carousel", function (a) {});
  }
  function K() {
    var b = a(".clients-slider > .owl-carousel");
    b.owlCarousel({
      items: 4,
      rtl: h,
      autoplay: !1,
      autoplaySpeed: 600,
      autoplayTimeout: 3e3,
      dragEndSpeed: 500,
      autoplayHoverPause: !0,
      loop: !1,
      slideBy: 1,
      margin: 30,
      stagePadding: 0,
      nav: !1,
      dots: !1,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      responsive: {
        0: { items: 1 },
        480: { items: 2 },
        768: { items: 3 },
        992: { items: 4 },
      },
      autoHeight: !1,
      autoWidth: !1,
      navRewind: !0,
      center: !1,
      dotsEach: 1,
      dotData: !1,
      lazyLoad: !1,
      smartSpeed: 600,
      fluidSpeed: 5e3,
      navSpeed: 500,
      dotsSpeed: 500,
    });
  }
  function M() {
    var b = a("#cfName").val(),
      c = a("#cfEmail").val(),
      d = a("#cfMessage").val();
    a.ajax({
      type: "POST",
      url: "./php/cf-process.php",
      data: "cfName=" + b + "&cfEmail=" + c + "&cfMessage=" + d,
      success: function (a) {
        "success" == a ? N() : (O(), P(!1, a));
      },
    });
  }
  function N() {
    var b = a(".cf-notifications").data("success-msg"),
      c = "Thank you for your submission :)",
      d = b ? b : c;
    a("#contact-form")[0].reset();
    var e = '<i class="cf-success-icon fa fa-check"></i>' + d;
    P(!0, e),
      a(".cf-notifications-cont").addClass("sent"),
      a(".cf-notifications").css("opacity", 0),
      a(".cf-notifications")
        .slideDown(300)
        .animate({ opacity: 1 }, 300)
        .delay(5e3)
        .slideUp(400);
  }
  function O() {
    a(".cf-notifications").css("opacity", 0),
      a(".cf-notifications").slideDown(300).animate({ opacity: 1 }, 300),
      a(".cf-notifications-cont").removeClass("sent");
  }
  function P(b, c) {
    var d;
    (d = b ? "shake animated" : "bounce animated"),
      a(".cf-notifications")
        .delay(300)
        .addClass(d)
        .one(
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
          function () {
            a(this).removeClass("shake bounce animated");
          }
        ),
      a(".cf-notifications").children(".cf-notifications-cont").html(c);
  }
  function Q() {
    a(".ss-icon").on("click", function (b) {
      b.preventDefault(),
        a(".style-switcher").toggleClass("show"),
        a(this).toggleClass("rotating");
    }),
      a(".colors-skins li button").each(function () {
        a(this).on("click", function () {
          a("[href*='css/skins/preview']").attr(
            "href",
            "css/skins/preview/skin-" + a(this).attr("class") + ".css"
          ),
            a(".colors-skins li button").removeClass("active"),
            a(this).addClass("active");
        });
      }),
      a(".switch-button").each(function () {
        a(this).on("click", function () {
          a(this).toggleClass("active"),
            a(this).next().toggleClass("active"),
            a(this).prev().toggleClass("active");
        }),
          a(this)
            .prev("span")
            .on("click", function () {
              a(this).addClass("active"),
                a(this).nextAll().removeClass("active");
            }),
          a(this)
            .next("span")
            .on("click", function () {
              a(this).addClass("active"),
                a(this)
                  .prev(".switch-button")
                  .addClass("active")
                  .prevAll("span:first-child")
                  .removeClass("active");
            });
      }),
      a(".logo-option .switch-button").each(function () {
        a(this).on("click", function () {
          a(".logo").toggleClass("logo-text");
        }),
          a(this)
            .prev("span")
            .on("click", function () {
              a(".logo").removeClass("logo-text");
            }),
          a(this)
            .next("span")
            .on("click", function () {
              a(".logo").addClass("logo-text");
            });
      }),
      a(".header-option .switch-button").each(function () {
        a(this).on("click", function () {
          a("#header, #header-wrap").slideToggle(300);
        }),
          a(this)
            .prev("span")
            .on("click", function () {
              a("#header, #header-wrap").slideUp(300);
            }),
          a(this)
            .next("span")
            .on("click", function () {
              a("#header, #header-wrap").slideDown(300);
            });
      }),
      a(".portfolio-width-option .switch-button").each(function () {
        a(this).on("click", function () {
          a(".portfolio-items-wrap")
            .children("div")
            .toggleClass("container-fluid container"),
            A.isotope("layout");
        }),
          a(this)
            .prev("span")
            .on("click", function () {
              a(".portfolio-items-wrap")
                .children("div")
                .removeClass()
                .addClass("container-fluid"),
                A.isotope("layout");
            }),
          a(this)
            .next("span")
            .on("click", function () {
              a(".portfolio-items-wrap")
                .children("div")
                .removeClass()
                .addClass("container"),
                A.isotope("layout");
            });
      });
  }
  
  a(document).on("ready", function () {
    f(),
      e(),
      j(),
      m(),
      l(),
      u(),
      k(),
      y(),
      p(),
      q(),
      r(),
      s(),
      t(),
      E(),
      z(),
      B(),
      C(),
      F(),
      G(),
      H(),
      I(),
      J(),
      K(),
      w(),
      x(),
      L();
  }),
    a(window).on("load", function () {
      i(), w(), o(), D(), R();
    }),
    a(window).on("resize", function () {
      x(), f(), l(), o();
    }),
    a(window).on("scroll", function () {
      m(), u(), s(), n();
    });
  var h,
    a = jQuery.noConflict(),
    d = (a(window), a(this), a("body")),
    g = a("html").css("direction");
  (h = "rtl" == g),
    a(".scroll-top, .scroll-top-btn").click(function (b) {
      b.preventDefault(),
        console.log("button clicked...."),
        a("html, body").animate({ scrollTop: 0 }, 700);
    });
  var A = a(".portfolio-items").isotope({
    itemSelector: ".portfolio-item",
    isResizeBound: !0,
    stagger: 0,
    transitionDuration: "0.5s",
    hiddenStyle: { opacity: 0, transform: "scale(0.009)" },
    visibleStyle: { opacity: 1, transform: "scale(1)" },
  });
})(jQuery);
