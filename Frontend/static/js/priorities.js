// Priorities click handlers
$(function(){
	$('.meta').popover({ trigger: "hover" })
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
	$('#priority-metatype').change(function() {
		var index = $('#priority-metatype>option:selected').attr('index');

		// Show/Hide Valid Metatypes
		if (index >= 3){
			$('.meta').removeClass('disabled') // All Valid
		} else if (index == 2){
			// No Troll
			$('.meta').removeClass('disabled') 
			$('.meta-troll').addClass('disabled')
		}  else if (index == 1){
			// Only human and elf.
			$('.meta').addClass('disabled') 
			$('.meta-human').removeClass('disabled') 
			$('.meta-elf').removeClass('disabled') 
		} else {
			// Only human chummer.
			$('.meta').addClass('disabled') 
			$('.meta-human').removeClass('disabled') 
		}
	});	

	$('#priority-attributes').change(function() {
		update_attributes('attributes_available', $(this).val());
	});	
	$('#priority-skills').change(function() {
		var val = $(this).val()
		update_skills('skills_available', val.split('/')[0]);
		update_skills('skill_groups_available', val.split('/')[1]);
	});

	// Click new meta
	$('.meta').click(function(){
		if ($(this).hasClass('disabled')) {
			return;
		}

		// Remove Stats from old meta
		old = $('.meta>class:active')
		if (old.hasClass('meta-human')) {

		} else if (old.hasClass('meta-elf')) {
			increment_base('agi', -2)
			increment_base('cha', -2)
		} else if (old.hasClass('meta-dwarf')) {
			increment_base('bod', -2)
			increment_base('str', -2)
			increment_base('wil', -1)
			increment_base('rea', 1)
		} else if (old.hasClass('meta-ork')) {

		} else if (old.hasClass('meta-troll')) {

		}

		// Activate button
		$('.meta').removeClass('active')
		$(this).addClass('active')
	});
});