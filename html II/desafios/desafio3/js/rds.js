<<<<<<< HEAD
$(document).ready(function(){
	$("html").niceScroll({
		cursorcolor:"rgba(255,255,255,0.2)",
		cursorborder:"1px solid rgba(0,0,0,0.1)",
		scrollspeed:100,
		autohidemode:false,
		cursorwidth:13,
		zindex:9999999,
		cursorborderradius:0,
		railpadding:{right:4}
	});

	$("nav li:first-child").click(function()
	{
		$('html, body').animate(
		{
			scrollTop: parseInt($("#empresa").offset().top)
		}, 1500);
	});
	$("nav li:nth-child(2)").click(function()
	{
		$('html, body').animate(
		{
			scrollTop: parseInt($("#servicios").offset().top)
		}, 1500);
	});
	$("nav li:nth-child(3)").click(function()
	{
		$('html, body').animate(
		{
			scrollTop: parseInt($("#consulta").offset().top)
		}, 1500);
	});
	$("nav li:nth-child(4)").click(function()
	{
		$('html, body').animate(
		{
			scrollTop: parseInt($("#contacto").offset().top)
		}, 1500);
	});

	$("#btn-subir").hide();
	$(function ()
	{
		$(window).scroll(function ()
		{
			if ($(this).scrollTop() > 200)
			{
				$("#btn-subir").fadeIn();
			}
			else
			{
				$("#btn-subir").fadeOut();
			}
		});
		$("#btn-subir").click(function ()
		{
			$("body,html").animate({
				"scrollTop": 0
			}, 800);
			return false;
		});
	});
=======
$(document).ready(function(){
	$("html").niceScroll({
		cursorcolor:"rgba(255,255,255,0.2)",
		cursorborder:"1px solid rgba(0,0,0,0.1)",
		scrollspeed:100,
		autohidemode:false,
		cursorwidth:13,
		zindex:9999999,
		cursorborderradius:0,
		railpadding:{right:4}
	});

	$("nav li:first-child").click(function()
	{
		$('html, body').animate(
		{
			scrollTop: parseInt($("#empresa").offset().top)
		}, 1500);
	});
	$("nav li:nth-child(2)").click(function()
	{
		$('html, body').animate(
		{
			scrollTop: parseInt($("#servicios").offset().top)
		}, 1500);
	});
	$("nav li:nth-child(3)").click(function()
	{
		$('html, body').animate(
		{
			scrollTop: parseInt($("#consulta").offset().top)
		}, 1500);
	});
	$("nav li:nth-child(4)").click(function()
	{
		$('html, body').animate(
		{
			scrollTop: parseInt($("#contacto").offset().top)
		}, 1500);
	});

	$("#btn-subir").hide();
	$(function ()
	{
		$(window).scroll(function ()
		{
			if ($(this).scrollTop() > 200)
			{
				$("#btn-subir").fadeIn();
			}
			else
			{
				$("#btn-subir").fadeOut();
			}
		});
		$("#btn-subir").click(function ()
		{
			$("body,html").animate({
				"scrollTop": 0
			}, 800);
			return false;
		});
	});
>>>>>>> eeedd12 (Primer commit)
});