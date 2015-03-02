$(document).on("click",".ware-item", function(e){
	$('.ware-item.active').removeClass('active');
	$(this).addClass('active');

	// Create Rating selector
	var s = '';
	for (var i=1; i<=parseInt($(this).attr('max_rating')); i++){
		s += '<option class="list-group-item no-pad" value="'+i+'">'+i+'</option>';
	}
	$('.ware-rating').html(s);

	set_selected_ware_values();
});

$(function(){
	$('.nav-add-ware').click(function(){
		var active = $('.ware-item.active');
		var html = $('.added-ware-list').html()
		$('.ware-list').html(html + '<ul>' + active.attr('name') + '</ul>');
		var essence = get_essence();
		modify_summary_data('ess', -1 * essence);
	});

	$('.ware-grade').change(function(){
		set_selected_ware_values();
	});	
	$('.ware-rating').change(function(){
		set_selected_ware_values();
	});
});

function get_essence(){
	var ess_base = active.attr('ess');
	var selected_rating = parseInt($('.ware-rating').val());
	var ess = get_value(ess_base, selected_rating);
	return ess
}

function set_selected_ware_values(){
	var active = $('.ware-item.active');
	var grade = $('.ware-grade').find(":selected");
	var cost_base = active.attr('cost');
	var avail_base = active.attr('avail');
	var selected_rating = parseInt($('.ware-rating').val());

	// Fixed Value Cost
	var cost = get_value(cost_base, selected_rating);
	var ess = get_essence();
	var avail = get_value(avail_base, selected_rating); // Fix

	var avail_str = '';
	if (avail_base.substr(-1) == 'R' || avail_base.substr(-1) == 'F'){
		avail_str = avail_base.substr(-1);
	}

	$('.ware-category').html('Category: ' + active.attr('category'));
    $('.ware-ess').html('Essence: ' + (parseFloat(ess) * parseFloat(grade.attr('ess'))).toPrecision(2));
    $('.ware-cost').html('Cost: ' + parseFloat(cost) * parseFloat(grade.attr('cost')));
    $('.ware-avail').html('Availability: ' + (parseInt(avail) + parseInt(grade.attr('avail'))) + avail_str);
    $('.ware-capacity').html('Capacity: ' + active.attr('capacity'));
    $('.ware-source').html('Source: ' + active.attr('source'));
}

function get_value(cost_base, selected_rating){
	var cost;

	// Fixed Value Cost
	if (cost_base.substr(0,11) == 'FixedValues'){
		cost = cost_base.substr(11).split(',')[selected_rating-1];
	} else {
		cost = parseFloat(cost_base) * selected_rating;
	}
	return cost;
}