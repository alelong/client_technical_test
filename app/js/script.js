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
				var li_id = event.currentTarget.id;
				var def_id = li_id + '_bis';
				console.log(def_id);
				toggle2(def_id);
				var menu_options_id = def_id + '_menu_options';
				var active_sub_menu = $('#' + menu_options_id).find('>ul>li:first-child');
				var active_sub_menu_id = active_sub_menu.prop('id');
				console.log(active_sub_menu_id);
				toggle1(active_sub_menu_id); 
				$('.column_bis').fadeIn();
				$('.side_section_bis').css('display','flex');
			});
		});
			//TODO: change pager for sub_banner
			//$('.slick-dots li button:before').css('background-image', "url('../images/pager_sub_banner.png')");
			//$('.slick-dots li').css('height', '10px');		
	});
	
	$(".detailed_menu_options ul li").click(function(event){
		if (!$(this).hasClass('detailed_selected')) {
			toggle1(this.id);
		}
	});
	
	$(".column_bis li").click(function(event){
		if (!$(this).hasClass('selected')) {
			var current_selection_id = $(".selected").prop('id');
			var new_menu_selection = event.currentTarget.id + '_menu_options'
			toggle2(current_selection_id);
			toggle2(this.id);
			var new_active_sub_menu = $('#' + new_menu_selection).find('>ul>li:first-child');
			var new_active_sub_menu_id = new_active_sub_menu.prop('id');
			toggle1(new_active_sub_menu_id); 
		}
	});
	
	//function toggling main section sub-menu items on click
	function toggle1(sub_menu_item){
	console.log(sub_menu_item);
	var current_selection = $(".detailed_selected");
	var current_docs = current_selection.prop('id') + '_docs';
	console.log(current_docs);
	var docs = sub_menu_item + '_docs';
	console.log(docs);
	current_selection.toggleClass("detailed_selected");
	$('#' + current_docs).toggleClass("inactive");
	$('#' + sub_menu_item).toggleClass("detailed_selected");
	$('#' + docs).toggleClass("inactive");
	}
	
	//function toggling left side menu items on click
	function toggle2(menu_item){
	console.log(menu_item);
	var menu_item_color = $('#' + menu_item).data("color");
	var menu_item_menu_options = menu_item + "_menu_options";
	var color_toggle_classes = menu_item_color + "_on "+ menu_item_color + "_off";
	var qa_color_toggle_classes = "qa_color_any_on qa_color_" + menu_item_color + "_off";
	$('#' + menu_item).toggleClass(color_toggle_classes);
	$('#' + menu_item).find('>div>div:first-child').toggleClass(qa_color_toggle_classes);
	$('#' + menu_item).toggleClass("selected");
	$('#' + menu_item_menu_options).toggleClass("inactive");
	}
});