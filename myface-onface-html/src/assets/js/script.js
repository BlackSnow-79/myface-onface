$(document).ready(function() {
	//select
	$('.blue-select').selectpicker({
	  style: 'blue-dropdown',
	});

	$('.select-amount').selectpicker({
	  style: 'amount-dropdown'
	});

	//open login-form
	$('.btn-login').click(function(){
		$('.row-login-2, .row-login-3').show();
		$(this).parent().hide();
		$('.box-log').hide('slow');
    $('.login-form').show('slow');
  });
  $('.btn-register').click(function(){
  	$('.row-login-2, .row-login-3').show();
		$(this).parent().hide();
		$('.box-log').hide('slow');
    $('.register-form').show('slow');
  });
  //open lightbox-wrap
  $('.btn-buy-now').click(function(){
  	if ($(this).hasClass('box-open')) {
			$(this).removeClass('box-open');
      $('.lightbox-1').hide('slow');
    }
    else {
	  	$(this).addClass('box-open');
	  	$('.lightbox-1').show('slow');
    }
  });
  $('.lightbox-1 .close-back').click(function(e){
  	e.preventDefault();
  	$('.btn-buy-now').removeClass('box-open');
  	$('.lightbox-1').hide('slow');
  });

  $('.btn-like-action').click(function(){
  	if ($(this).hasClass('box-open')) {
			$(this).removeClass('box-open');
      $('.lightbox-2').hide('slow');
      $('.btn-number-action').removeClass('box-open');
      $('.number-box').hide('slow');
    }
    else {
	  	$(this).addClass('box-open');
	  	$('.lightbox-2').show('slow');
    }
  });
  $('.lightbox-2 .close-back').click(function(e){
  	e.preventDefault();
  	$('.btn-like-action').removeClass('box-open');
  	$('.lightbox-2').hide('slow');
  	$('.btn-number-action').removeClass('box-open');
  	$('.number-box').hide('slow');
  });

  $('.btn-number-action').click(function(){
  	if ($(this).hasClass('box-open')) {
			$(this).removeClass('box-open');
      $('.number-box').hide('slow');
    }
    else {
	  	$(this).addClass('box-open');
	  	$('.number-box').show('slow');
    }
  });

  //backt-to-top
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      $('.fixed-block').fadeIn();
    }
    else {
      $('.fixed-block').fadeOut();
    }
  });
  //Back to top button
  $('.back-to-top-btn').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 300);
  });

 	/*setSize*/
  function setSizes1() {
		var containerW = $('.m-product-img').width();
		$('.m-product-img').height(containerW * 0.75);
  }
  setSizes1();
	$(window).resize(function() {
    setSizes1();
  });
   /*date picker*/
  $(function () {
    $('.date-picker').datetimepicker({
        viewMode: 'years',
        format: 'DD/MM/YYYY'
    });
	});
	//add-address-form
	$('.add-p-form-btn').click(function(){
		$(this).hide();
	  $('.add-address-form').show('slow');
  });
  //register
  $('.rg-step-1-btn').click(function(){
	  $('.register-step-1').hide('slow');
	  $('.register-step-2').show('slow');
  });
  //support-center
  $('.sidebar-tab-selector').click(function(){
		if($(this).hasClass('drop-active')) {
      $(this).removeClass('drop-active');
    }
    else {
      $(this).addClass('drop-active');
    }
	});
	$(function(){
		$('.sidebar-tab-selector').text($('.sidebar-drop .active a').text());
		$('.sidebar-drop li a').click(function(){
			$('.sidebar-tab-selector').text($(this).text());
		});
	});
  /*fixed navigator*/
  $(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
      $('.is-sticky').addClass('sticked');
    } else {
      $('.is-sticky').removeClass('sticked');
    }
  });
  $(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
      $('main .is-sticky').addClass('container');
    } else {
      $('main .is-sticky').removeClass('container');
    }
  });
  $('.banner-1').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    adaptiveWight: true
  });
  /*remove css inline for img*/
  $('img').each(function () {
    $(this).removeAttr('style')
  });
  /*search-mobile*/
  $(function () {
    $( '.show-search-active').click(function(e) {
      $('body').addClass('show-search');
    })
    $( '.search-close').click(function(e) {
      $('body').removeClass('show-search');
    });
  });
  /*product-info on mobile
  function setProductinfo() {
    var windowWidth = $(window).width();
    if(windowWidth < 768){
      $('.product-info').appendTo('.product-info-mobile');
    }
    else {
      $('.product-info-mobile').detach();
    }
  }
  $(window).on('resize', function(event){
    setProductinfo();
  });*/
});
