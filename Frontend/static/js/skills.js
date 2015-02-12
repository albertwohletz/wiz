$(function(){
	$( ".skill-spinner" ).spinner({
		min: 1,
		max: 6,
		start: 1,
		spin: function( event, ui ) {
			set_attribute($(this).attr('id'), ui.value);
			sum=0;
			$('.skill-spinner').each(function(){
		    	sum += parseInt($(this).val() - $(this).attr('aria-valuemin'));
			});
			update_skills('skills_spent', sum);
      	}
	});
	$( ".group-spinner").spinner({
		spin: function( event, ui ){
		}
	});
	$( ".group-karma-spinner").spinner();

	$( ".group-spinner" ).spinner({
		min: 1,
		max: 6,
		start: 1,
		spin: function( event, ui ) {
			set_attribute($(this).attr('id'), ui.value);
			sum=0;
			$('.group-spinner').each(function(){
		    	sum += parseInt($(this).val() - $(this).attr('aria-valuemin'));
			});
			update_skills('skill_groups_spent', sum);
      	}
	});
});