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
});