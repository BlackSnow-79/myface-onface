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
});