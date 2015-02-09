// Priorities click handlers
$(function(){
	$('.meta').popover()
	$(".priority").change(function(){
		var sum = 0
		$('.priority>option:selected').each(function(){ 
			sum += parseInt($(this).attr('index')); 
		});

		$('#summary-priorities').html(sum + ' of 10')

		if (sum == 10){
			$('#summary-priorities').parent().addClass('success');
			$('#summary-priorities').parent().removeClass('danger');			
		} else if (sum > 10){
			$('#summary-priorities').parent().addClass('danger');	
			$('#summary-priorities').parent().removeClass('success');			
		} else {
			$('#summary-priorities').parent().removeClass('danger');	
			$('#summary-priorities').parent().removeClass('success');				
		}
	});
	$('#priority-attributes>option:selected').attr('index')
	$('#priority-attributes').change(function() {
		update_attributes('attributes_available', $(this).val());
	});	
	$('#priority-skills').change(function() {
		var val = $(this).val()
		update_skills('skills_available', val.split('/')[0]);
		update_skills('skill_groups_available', val.split('/')[1]);
	});
});