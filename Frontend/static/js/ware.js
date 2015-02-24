$(document).on("click",".cyberware-item", function(e){
	$('.cyberware-item.active').removeClass('active');
	$(this).addClass('active');

    $('.ware-category').html('Category: ' + $(this).attr('category'));
    $('.ware-ess').html('Essence: ' + $(this).attr('ess'));
    $('.ware-cost').html('Cost: ' + $(this).attr('cost'));
    $('.ware-avail').html('Availability: ' + $(this).attr('avail'));
    $('.ware-capacity').html('Capacity: ' + $(this).attr('capacity'));
    $('.ware-source').html('Source: ' + $(this).attr('source'));
});

$(document).on("click",".bioware-item", function(e){
	$('.bioware-item.active').removeClass('active');
	$(this).addClass('active');

    $('.ware-category').html('Category: ' + $(this).attr('category'));
    $('.ware-ess').html('Essence: ' + $(this).attr('ess'));
    $('.ware-cost').html('Cost: ' + $(this).attr('cost'));
    $('.ware-avail').html('Availability: ' + $(this).attr('avail'));
    $('.ware-capacity').html('Capacity: ' + $(this).attr('capacity'));
    $('.ware-source').html('Source: ' + $(this).attr('source'));
});
