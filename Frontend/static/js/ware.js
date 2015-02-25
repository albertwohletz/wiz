$(document).on("click",".ware-item", function(e){
	$('.ware-item.active').removeClass('active');
	$(this).addClass('active');

	set_selected_ware_values();
});

$(function(){
	$('.nav-add-ware').click(function(){
		alert('bah');
	});

	$('.ware-grade').change(function(){
		set_selected_ware_values();
	});
});

function set_selected_ware_values(){
	var active = $('.ware-item.active');
	var grade = $('.ware-grade').find(":selected");
	$('.ware-category').html('Category: ' + active.attr('category'));
    $('.ware-ess').html('Essence: ' + parseFloat(active.attr('ess')) * parseFloat(grade.attr('ess')));
    $('.ware-cost').html('Cost: ' + parseFloat(active.attr('cost')) * parseFloat(grade.attr('cost')));
    $('.ware-avail').html('Availability: ' + combine_avails(active.attr('avail'), grade.attr('avail')));
    $('.ware-capacity').html('Capacity: ' + active.attr('capacity'));
    $('.ware-source').html('Source: ' + active.attr('source'));
}

function combine_avails(base, mod){
	var delta = 0;
	if (mod[0] == '-') {
		delta = -1 * parseInt(mod.substr(1));
	}
	else if (mod[1] == '+') {
		delta = parseInt(mod.substr(1));
	} else {
		delta = parseInt(mod);
	}

	if (base[base.length-1] == 'R' || base[base.length-1] == 'F'){
		return parseInt(base.substring(0, base.length - 1)) + parseInt(mod) + base[base.length-1];
	} else {
		return parseInt(base) + parseInt(mod);	
	}

	
}