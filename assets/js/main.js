(function ($) {
  "use strict";

  $(document).ready(function () {
    /**-----------------------------
     *  Navbar fix
     * ---------------------------*/
    $(document).on(
      "click",
      ".navbar-area .navbar-nav li.menu-item-has-children>a",
      function (e) {
        e.preventDefault();
      }
    );

    /*-------------------------------------
            menu
        -------------------------------------*/
    $(".navbar-area .menu").on("click", function () {
      $(this).toggleClass("open");
      $(".navbar-area .navbar-collapse").toggleClass("sopen");
    });

    // mobile menu
    if ($(window).width() < 992) {
      $(".in-mobile").clone().appendTo(".sidebar-inner");
      $(".in-mobile ul li.menu-item-has-children").append(
        '<i class="fas fa-chevron-right"></i>'
      );
      $('<i class="fas fa-chevron-right"></i>').insertAfter("");

      $(".menu-item-has-children a").on("click", function (e) {
        // e.preventDefault();

        $(this).siblings(".sub-menu").animate(
          {
            height: "toggle",
          },
          300
        );
      });
    }

    var menutoggle = $(".menu-toggle");
    var mainmenu = $(".navbar-nav");

    menutoggle.on("click", function () {
      if (menutoggle.hasClass("is-active")) {
        mainmenu.removeClass("menu-open");
      } else {
        mainmenu.addClass("menu-open");
      }
    });

    /*--------------------------------------------------
            select onput
        ---------------------------------------------------*/
    if ($("select").length) {
      $("select").niceSelect();
    }

    /* -----------------------------------------------------
            Variables
        ----------------------------------------------------- */
    var leftArrow = '<i class="la la-angle-left"></i>';
    var rightArrow = '<i class="la la-angle-right"></i>';

    /* -------------------------------------------------
            Magnific JS 
        ------------------------------------------------- */
    $(".video-play-btn").magnificPopup({
      type: "iframe",
      removalDelay: 260,
      mainClass: "mfp-zoom-in",
    });
    $.extend(true, $.magnificPopup.defaults, {
      iframe: {
        patterns: {
          youtube: {
            index: "youtube.com/",
            id: "v=",
            src: "https://www.youtube.com/embed/Wimkqo8gDZ0",
          },
        },
      },
    });

    /*------------------------------------------------
            post-slider
        ------------------------------------------------*/
    $(".post-slider").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      rtl: true,

      smartSpeed: 1500,
      navText: [rightArrow, leftArrow],
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 1,
        },
        992: {
          items: 1,
        },
      },
    });

    /*---------------------------------------------
            cs-partner-slider-11
        ----------------------------------------------*/
    $(".most-view-slider").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      rtl: true,

      smartSpeed: 1500,
      center: true,
      items: 3,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 1,
        },
        768: {
          items: 3,
        },
      },
    });

    /*--------------------------------------------
            Search Popup
        ---------------------------------------------*/
    var bodyOvrelay = $("#body-overlay");
    var searchPopup = $("#td-search-popup");

    $(document).on("click", "#body-overlay", function (e) {
      e.preventDefault();
      bodyOvrelay.removeClass("active");
      searchPopup.removeClass("active");
    });
    $(document).on("click", ".search", function (e) {
      e.preventDefault();
      searchPopup.addClass("active");
      bodyOvrelay.addClass("active");
    });

    /*-------------------------------------------------
            wow js init
        --------------------------------------------------*/
    new WOW().init();

    /*------------------
           back to top
        ------------------*/
    $(document).on("click", ".back-to-top", function () {
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        2000
      );
    });
  });

  $(window).on("scroll", function () {
    /*---------------------------------------
            back-to-top
        -----------------------------------------*/
    var ScrollTop = $(".back-to-top");
    if ($(window).scrollTop() > 1000) {
      ScrollTop.fadeIn(1000);
    } else {
      ScrollTop.fadeOut(1000);
    }

    /*---------------------------------------
            sticky-active
        -----------------------------------------*/
    var scroll = $(window).scrollTop();
    if (scroll < 445) {
      $(".navbar").removeClass("sticky-active");
    } else {
      $(".navbar").addClass("sticky-active");
    }
  });

  $(window).on("load", function () {
    /*-----------------
            preloader
        ------------------*/
    var preLoder = $("#preloader");
    preLoder.fadeOut(0);

    /*-----------------
            back to top
        ------------------*/
    var backtoTop = $(".back-to-top");
    backtoTop.fadeOut();

    /*---------------------
            Cancel Preloader
        ----------------------*/
    $(document).on("click", ".cancel-preloader a", function (e) {
      e.preventDefault();
      $("#preloader").fadeOut(2000);
    });
  });







})(jQuery);


document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.querySelector('.chat-messages');
    const messageInput = document.getElementById('messageInput');
    const attachmentInput = document.getElementById('attachmentInput');

    // Function to send a text message
    window.sendMessage = function() {
        const messageText = messageInput.value.trim();
        if (messageText !== "") {
            const messageEl = document.createElement('div');
            messageEl.classList.add('message');
            messageEl.innerHTML = `
                <div class="message-header">
                    <img class="user-image" src="https://via.placeholder.com/40" alt="مستخدم">
                    <div class="user-details">
                        <span class="user-name">أنت</span>
                        <span class="message-timestamp">${new Date().toLocaleTimeString()}</span>
                    </div>
                </div>
                <p class="message-content">${messageText}</p>
            `;
            chatMessages.appendChild(messageEl);
            messageInput.value = '';
            messageEl.scrollIntoView();
        }
    }

    // Mock function for recording a voice message
    window.recordVoice = function() {
        alert('تسجيل الرسالة الصوتية ليس مفعلاً بعد.');
    }

    // Handle file attachment input changes
    attachmentInput.onchange = function(event) {
        const files = Array.from(event.target.files);
        if (files.length > 0) {
            alert(`تم اختيار الملف: ${files.map(file => file.name).join(', ')}`);
        }
    }
});

