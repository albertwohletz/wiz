$(function(){
	$( ".attribute-spinner" ).spinner({
		min: 1,
		max: 6,
		start: 1,
		spin: function( event, ui ) {
			set_attribute($(this).attr('id'), ui.value);
			var sum = 0;
			for (var attribute_name in attributes){
				sum += attributes[attribute_name]['base'] - attributes[attribute_name]['min'];
			}
			update_attributes('attributes_spent', sum);
      	}
	});
	$( ".special-spinner" ).spinner({
		min: 0,
		max: 6,
		start: 0,
		spin: function( event, ui ) {
			summary_data['attributes'][$(this).attr('id')]['base'] = ui.value;
			update_special_attributes();
      	}
	});
	//.spinner( "disable" );
	$( ".special-spinner" ).addClass('disabled');
	$('.karma-spinner').spinner();
});