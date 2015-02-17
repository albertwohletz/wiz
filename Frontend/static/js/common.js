$(function(){
	$( ".attribute-spinner" ).spinner({
		min: 1,
		max: 6,
		start: 1,
		spin: function( event, ui ) {
			set_attribute($(this).attr('id'), ui.value);
			sum=0;
			$('.attribute-spinner').each(function(){
		    	sum += parseInt($(this).attr('aria-valuenow') - $(this).attr('aria-valuemin'));
			});
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