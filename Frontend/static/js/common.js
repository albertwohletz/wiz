$(function(){
	$( ".spinner" ).spinner({
		min: 1,
		max: 10,
		start: 1,
		spin: function( event, ui ) {
			set_attribute($(this).attr('id'), ui.value);
			sum=0;
			$('.attribute-spinner').each(function(){
		    	sum += parseInt($(this).val() - $(this).attr('aria-valuemin'));
			});
			update_attributes('attributes_spent', sum);
      	}
	});
	// Update attributes when moving spinner
	$('.attribute-spinner').change(function(){
		var sum=0;
		$('.attribute-spinner').each(function(){
	    	sum += parseInt($(this).val());
		});
		update_attributes('attributes_spent', sum);
	});
});