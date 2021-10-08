$(document).ready(function(){


	jQuery(".have_drop_menu").click(function(){
		jQuery(this).toggleClass("active").siblings().removeClass("active");
	});

	jQuery(".languageSelect> a").click(function(){
		jQuery(this).addClass("active").siblings().removeClass("active");
	});

	jQuery(".menu_triger").click(function(){
		jQuery(this).toggleClass("active");
	});

	jQuery(".haveDrop> a").click(function(){
		jQuery(this).toggleClass("active");
	});

	// jQuery("ul.whitePagMenuList> li").click(function(){
	// 	jQuery(this).toggleClass("active");
	// });

	jQuery(".menu_triger").click(function(){
		jQuery(".menu_boxes").toggleClass("active");
	});


	// jQuery(".filterTriger").click(function(){
	// 	jQuery(".search_side").addClass("active");
	// });


    var sticky = new Sticky('[data-sticky]', {});


});