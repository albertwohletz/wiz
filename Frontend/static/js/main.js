/**
 * Created by albertlwohletz on 2/7/15.
 */

// Init JQuery Elements
$(function() {
    $( ".resizable" ).resizable();
    $( ".overlay" ).draggable();

    // Overlay close button
    $('.close-button').click(function() {
    	$(this).parent().hide();
	});
});

$(function(){
	// Qualities Functios
	$('.add-qualities').click(function(){
		$('.positive-qualities').show();
	});
	$('.positive-quality-item').click(function(e){
		desc = 'Karma: ' + $( this ).val() + '</br>' + $( this ).attr('description')
		$('.quality-description').html(desc);
		$('.positive-quality-item').removeClass('active');
		$(this).addClass('active');
	});	
});



var summary_data={
	'attributes_spent': 0,
	'attributes_available': 16
}

function update_attributes(key, value){
	summary_data[key] = value;
	$('#summary-primary-attributes').html(summary_data['attributes_spent'] + ' of ' + summary_data['attributes_available']);

	if (summary_data['attributes_spent'] > summary_data['attributes_available']){
		$('#summary-primary-attributes').parent().addClass('danger');		
	} else {
		$('#summary-primary-attributes').parent().removeClass('danger');	
	}
}

function get_data(key){
	return data[key];
}