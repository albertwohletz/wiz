/**
 * Created by albertlwohletz on 2/7/15.
 */

// Init JQuery Elements
$(function() {
    $( ".resizable" ).resizable();

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

var attributes={
	'bod': {'base': 1, 'aug': 1},
	'agi': {'base': 1, 'aug': 1},
	'rea': {'base': 1, 'aug': 1},
	'str': {'base': 1, 'aug': 1},
	'cha': {'base': 1, 'aug': 1},
	'int': {'base': 1, 'aug': 1},
	'log': {'base': 1, 'aug': 1},
	'wil': {'base': 1, 'aug': 1},
	'edg': {'base': 1, 'aug': 1},
	'mag': {'base': 1, 'aug': 1},
	'res': {'base': 1, 'aug': 1}
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

function get_attribute(key){
	return attributes[key];
}
function set_attribute(key, value){
	attributes[key] = value;
	$('.'+key+'-val').html(value);
}