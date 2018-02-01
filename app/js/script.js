//FadeOuts and grey box on click of 4 main boxes
$(document).ready(function(){
	$('#main_banner').slick({
	autoplay: true,
	autoplaySpeed: 8000,
	dots: true,
	arrows: false,
	});
	
	$(".column li").click(function(event){
		console.log(event);
		$(".column").fadeOut();
		$(".side_section").fadeOut();
		var top_height = $('#main_banner').height();
		var top_height_reduced = 0.286*top_height;
		$('#grey_box').css('height', top_height);
		$('#top_section').css('height', top_height); // top_section height needs to match grey box for the footer to still be displayed below
		$("#sub_banner").css('height', top_height_reduced);
		$("#sub_banner").css('width', '100%');
		$("#main_banner").fadeOut("slow", function(){
			$("#top_section").animate({height: top_height_reduced}, 500 );
			$("#grey_box" ).animate({height: top_height_reduced}, 500, function(){
				$('#sub_banner').fadeIn(400, function(){
					$('#sub_banner').slick({
					autoplay: true,
					autoplaySpeed: 8000,
					dots: true,
					arrows: false,
					});
				});
				//TODO: change pager for sub_banner
				var img = $(event.target).closest('li').find('img');
				var li_id = event.currentTarget.id;
				//var img_id = li_id + '_qa_color_bis';
				//$('#' + img_id).attr('src', 'images/qa_white.png');
				var def_id = li_id + '_bis';
				$('#' + def_id).addClass('selected');
				toggle_menu_item_class($('#' + def_id));
				$('.column_bis').fadeIn();
				$('.menu_options_bis').css('display','flex');
				$('.side_section_bis').css('display','flex');
				var menu_options_id = li_id + '_bis_menu_options';
				var active_sub_menu = $('#' + menu_options_id).find('>ul>li:first-child');
				active_sub_menu.addClass('detailed_selected');
				var active_sub_menu_id = active_sub_menu.prop('id');
				var docs_onDisplay = active_sub_menu_id + '_docs';
				$('#' + menu_options_id).fadeIn();
				$('#' + docs_onDisplay).css('display','flex');
			});
		});
			//TODO: change pager for sub_banner
			//$('.slick-dots li button:before').css('background-image', "url('../images/pager_sub_banner.png')");
			//$('.slick-dots li').css('height', '10px');		
	});
	// on click of column_bis menu entries, switch view to matching infos
	$(".column_bis li").click(function(event){
		if (!$(this).hasClass('selected')) {
			var current_selected = $(".selected");
			current_selected.removeClass('selected');
			toggle_menu_item_class(current_selected);
			$(this).addClass('selected');
			toggle_menu_item_class($(this));
		}
	});
	// function toggling left-side menu items and menu sections on click
	function toggle_menu_item_class(menu_item){
		console.log(menu_item);
		var menu_item_color = menu_item.data("color");
		var color_toggle_classes = menu_item_color + "_on "+ menu_item_color + "_off";
		var qa_color_toggle_classes = "qa_color_any_on qa_color_" + menu_item_color + "_off";
		var menu_item_section = menu_item.prop('id') + "_section";
		var active_sub_menu = $('#'+ menu_item_section).find('>div>ul>li:first-child');
		menu_item.toggleClass(color_toggle_classes);
		menu_item.find('>div>div:first-child').toggleClass(qa_color_toggle_classes);
		$('#' + menu_item_section).toggleClass("inactive");
		active_sub_menu.addClass('detailed_selected');
	}	
});