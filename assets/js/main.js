// =======================================================================
//   This Template
// =======================================================================
//   Title : CycleMistri - Bicycle repairing template
//   Version : 1.0
//   Author : AutWorks
//   Date : 30-07-2018
//
//
// ======================================================================
//  Table of contents
// ======================================================================
//  01. Preloader 
//  02. Fixed navbar
//  03. Responsive menu button
//  04. Venobox video
//  05. FAQ fuction
//  06. Testimonial slider
//  07. Scroll to top
//  08. Smooth scroll
//
// ======================================================================



(function ($) {
    "use strict";


    //======================================
    //============ Preloader ===============
    //======================================
    $(window).on('load', function(){
        var preLoder = $(".preloader");
        preLoder.fadeOut(1000);
    });


    //======================================
    //=========== Fixed navbar =============
    //======================================
    $(window).on('scroll', function(){
        var headerSection = $('.header-bottom');
        var mainMenuTop = $('.header-section .header-top');

        if ($(window).scrollTop() > 100) {
            headerSection.addClass('fixed-navbar');
            mainMenuTop.addClass('resize-header-top-padding');
        } else {
            headerSection.removeClass('fixed-navbar');
            mainMenuTop.removeClass('resize-header-top-padding');
        }
        
    });


    //======================================
    //====== Responsive menu button ========
    //======================================
    $(function(){
      $('.resp-bar > i').on('click', function(){
        $('.nav-bar').slideToggle(300);
      });
        
    });


    //======================================
    //========== venobox video ============
    //======================================
    $(function(){
        $('.venobox').venobox(); 
    });


    //======================================
    //============ FAQ fuction =============
    //======================================
    $(function(){
      
      $('.part-ques').on('click', function() {
            $(this)
                .next().slideDown()
                  .siblings('.part-ans')
                    .slideUp();
        }); 
    });


    //======================================
    //======== Testimonial slider ==========
    //======================================
    $(function(){
    	
      var testimonialCarousel = $('.testimonial-slider');
          testimonialCarousel.owlCarousel({
           loop:true,
          dots:true,
          dotData:true,
          startPosition:2,
          nav:true,
          item: 1,
          navText: ['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
          autoplay:true,
          autoplayTimeout:3000,
          autoplayHoverPause:true,
          responsive : {
            0 : {
                items: 1
            },
            768 : {
                items: 1
            },
            960 : {
                items: 1
            },
            1200 : {
                items: 1
            },
            1920 : {
                items: 1
            }
          }
      }); 
      
    });


    //======================================
    //========== Scroll to top =============
    //======================================
    $(function(){
      $('.scroll-to-top').on('click', function(){
        $("html,body").animate({
            scrollTop: 0}, 1000);
      });
    });
    $(window).scroll(function(){

        var ScrollTop = $('.scroll-to-top');
        if ($(window).scrollTop() > 500) {
                ScrollTop.fadeIn(500);
        } else {
                ScrollTop.fadeOut(500);
       }  

    });


    //======================================
    //========== Smooth scroll =============
    //======================================
    $('.nav-bar li a').on('click', function (e) {
        e.preventDefault();
        var anchor = $(this).attr('href');
        var top = $(anchor).offset().top;
        $('html, body').animate({
            scrollTop: $(anchor).offset().top
        }, 1000);
    });



}(jQuery));